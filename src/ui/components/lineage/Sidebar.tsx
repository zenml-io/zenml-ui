import React, { useState, useEffect, useRef } from 'react'
import circleArrowSideClose from '../icons/assets/circleArrowSideClose.svg';
import circleArrowSideOpen from '../icons/assets/circleArrowSideOpen.svg';
import styles from './index.module.scss'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import Switch from "react-switch";
import { useSelector } from '../../hooks';
import { sessionSelectors } from '../../../redux/selectors';
import axios from 'axios';
import { Status_Completed } from './icons';
import sidebarStyles from './sidebar.module.css'

// const TogglerSwitch: React.FC<any> = ({ label, css }) => {
//     const [checked, setchecked] = useState(false)
//     return (
//         <div style={{ ...css, justifyContent: 'center', alignItems: 'center', background: 'pink' }}>
//             <div style={{ minWidth: 200 }}>
//                 {label}
//             </div>
//             <div>
//                 {/* <Switch
//                     onChange={() => setchecked(!checked)}
//                     checked={checked}
//                     height={16}
//                     width={36}
//                     onColor={"#7870f1"}
//                     offColor={"#3b3a4e"}
//                 /> */}
//             </div>
//         </div>
//     )
// }

function printNestedJson(obj: any) {
    let output = '';
    for (let key in obj) {
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            output += `<p style="color:#443E99; font-size:18px; font-weight:600 ">${key}</p>`;
            output += printNestedJson(obj[key]);
        } else if (Array.isArray(obj[key])) {
            output += `<p style="color:blue; font-size:16px; font-weight:400 ">${key}</p>`;
            obj[key].forEach((item: any) => output += printNestedJson(item)); //eslint-disable-line
        } else {
            output += `<div><span><strong style='color:#565e5e; font-size:14px'>${key}</strong><span> : <span style='color:#1dc2a6; font-size:14px'>${obj[key]}<span></p>`;
            // output += `<p style="color:green; font-size:14px; font-weight:200 ">${key}: ${obj[key]}</p>`;
        }
    }
    return output;
}

// React component to display nested JSON object
function JsonDisplay({ data }: any) {
    const json = printNestedJson(data)
    const string = JSON.stringify(json)
    console.log({ string })
    return (
        <div dangerouslySetInnerHTML={{ __html: printNestedJson(data) }} style={{ overflow: 'auto', maxHeight: '80%', margin: 20 }} />
    );
}

const StepnodeTabHeader: React.FC<any> = ({ node }) => {
    const [show, setShow] = useState("__CONFIG");
    const [configShow, setConfigShow] = useState("__CONFIGURATION");
    // const [checked, setChecked] = useState(false);


    const TabClickHandler = (tab: string) => {
        switch (tab) {
            case "__CONFIG": return setShow("__CONFIG");
            case "__LOG": return setShow("__LOG");
            case "__ATTRIBUTE": return setShow("__ATTRIBUTE");
            case "__CODE": return setShow("__CODE");
            default: return "";
        }
    }
    const ConfigurationTabClickHandler = (tab: string) => {
        switch (tab) {
            case "__CONFIGURATION": return setConfigShow("__CONFIGURATION")
            case "__RUNS": return setConfigShow("__RUNS")
            case "__STACK": return setConfigShow("__STACK")
            default: return ""
        }
    }
    return (

        <>
            <div className='siderbar_header11 '>
                {/* <span className='' onClick={() => TabClickHandler("__CONFIG")} style={{ borderBottom: show === "__CONFIG" ? "solid" : "" }}>Config</span> */}
                <span className='' onClick={() => TabClickHandler("__CONFIG")} style={show === "__CONFIG" ? { borderBottom: "solid", opacity: 1 } : { opacity: 0.5 }}>Config</span>
                <span className='' onClick={() => TabClickHandler("__LOG")} style={show === "__LOG" ? { borderBottom: "solid", opacity: 1 } : { opacity: 0.5 }}>Log</span>
                <span className='' onClick={() => TabClickHandler("__ATTRIBUTE")} style={show === "__ATTRIBUTE" ? { borderBottom: "solid", opacity: 1 } : { opacity: 0.5 }}>Attribute</span>
                <span className='' onClick={() => TabClickHandler("__CODE")} style={show === "__CODE" ? { borderBottom: "solid", opacity: 1 } : { opacity: 0.5 }}>Code</span>
            </div>
            {
                show === "__ATTRIBUTE" ?
                    <>
                        {/* MAKE IT SCROLLABLE */}
                        <table className='sidebar_table'>
                            <tr>
                                <td className='td_key'>Status</td>
                                {node.status && node.status === "completed" ?
                                    <>
                                        <td className='td_value' style={{ color: '#2ECC71', fontSize: 14, fontWeight: 600 }}>{node.status}</td>
                                        <Status_Completed /> {/*eslint-disable-line*/}
                                        &nbsp;&nbsp;&nbsp;
                                    </>
                                    :
                                    <td className='td_value'>{node.status}</td>
                                }
                            </tr>
                            <tr>
                                <td className='td_key'>ID</td>
                                <td className='td_value'>{node.id}</td>
                            </tr>
                            <tr>
                                <td className='td_key'>start_time</td>
                                <td className='td_value'>{node?.created}</td>
                            </tr>
                            <tr>
                                <td className='td_key'>end_time</td>
                                <td className='td_value'>{node?.end_time}</td>
                            </tr>
                            <tr>
                                {node.original_step_run_id && node.original_step_run_id !== null ?
                                    <>
                                        <td className='td_key'>original_step_run_id</td>
                                        <td className='td_value'>{node?.original_step_run_id}</td>
                                    </> : <></>
                                }
                            </tr>
                            <tr>
                                {/* {node.parent_step_id !== '' ?
                                    <>
                                        <td className='td_key'>parent_step_ids</td>
                                        <td className='td_value'>{node.parent_step_id}</td>
                                    </>
                                    : ""} */}
                            </tr>
                            <tr>
                                <td className='td_key'>cache_key</td>
                                <td className='td_value'>{node?.cache_key}</td>
                            </tr>
                            <tr>
                                <td className='td_key'>docstring</td>
                                <td className='td_value'>{node?.docstring}</td>
                            </tr>
                            <tr>
                                <td className='td_key'>enable_cache</td>
                                <td className='td_value'>{node?.docstring}</td>
                            </tr>
                            <tr>
                                {node.enable_artifact_metadata && node.enable_artifact_metadata ?
                                    <>
                                        <td className='td_key'>enable_artifact_metadata</td>
                                        <td className='td_value'>{node?.enable_artifact_metadata}</td>
                                    </>
                                    : <></>
                                }
                            </tr>
                            <tr>
                                <td className='td_key'>source</td>
                                <td className='td_value'>{node?.step?.spec?.source}</td>
                            </tr>
                            <tr>
                                <td className='td_key'>pipeline_parameter_name</td>
                                <td className='td_value '>{node?.step?.spec?.pipeline_parameter_name}</td>
                            </tr>
                        </table>
                    </>
                    : ""
            }
            {
                show === "__CODE" ?
                    <div className={styles.codeContainer}>
                        <SyntaxHighlighter
                            customStyle={{ width: '100%', height: '80%', fontSize: 20 }}
                            wrapLines={true}
                            language="python"
                            style={okaidia}

                        >
                            {node.source_code}
                        </SyntaxHighlighter>
                    </div>
                    : ""
            }
            {
                show === "__LOG" ?
                    <div className={styles.codeContainer}>
                        <SyntaxHighlighter
                            customStyle={{ width: '100%' }}
                            wrapLines={true}
                            language="Python"
                            style={okaidia}
                        >
                            {node.source_code}
                        </SyntaxHighlighter>
                    </div>
                    : ""
            }
            {show === "__CONFIG" ?

                <>
                    <div className='config_container'>
                        <div>
                            <p>Component Name</p>
                            <input type='text' placeholder='component name' />
                        </div>

                        <div>
                            <p>Kubernetes Context</p>
                            <input type='text' placeholder='Kubernetes Context' />
                        </div>
                        <div>
                            <p>Kubernetes Context</p>
                            <input type='text' placeholder='Kubernetes Context' />
                        </div>
                        <div>
                            <p>Kubernetes Context</p>
                            <input type='text' placeholder='Kubernetes Context' />
                        </div>
                        <div>
                            <p>Kubernetes Context</p>
                            <input type='text' placeholder='Kubernetes Context' />
                        </div>
                    </div>
                </>
                : ""
            }

        </>
    )
}
const ArtifactTabHeader: React.FC<any> = ({ node }) => {
    const [show, setShow] = useState("__META");
    console.log("_CLICKED  Artifact header", node);

    const TabClickHandler = (tab: string) => {
        switch (tab) {
            case "__META": return setShow("__META");
            case "__ATTRIBUTE": return setShow("__ATTRIBUTE");
            default: return "";
        }
    }

    return (
        <>
            <div className='siderbar_header11 '>
                <span className='' onClick={() => TabClickHandler("__META")} style={show === "__META" ? { borderBottom: "solid", opacity: 1 } : { opacity: 0.5 }}>Meta-data</span>
                <span className='' onClick={() => TabClickHandler("__ATTRIBUTE")} style={show === "__ATTRIBUTE" ? { borderBottom: "solid", opacity: 1 } : { opacity: 0.5 }}>Attribute</span>
            </div>

            {/* SHOW META */}
            {show === "__META" ?
                <JsonDisplay data={node?.metadata} />
                : ""}

            {/* SHOW ATTRIBUTE */}

            {show === "__ATTRIBUTE" ?
                <>
                    <table className='sidebar_table'>

                        <tr>
                            <td className='td_key'>artifact_store_id</td>
                            <td className='td_value'>{node.artifact_store_id}</td>
                        </tr>
                        <tr>
                            <td className='td_key'>created</td>
                            <td className='td_value'>{node.created}</td>
                        </tr>
                        <tr>
                            <td className='td_key'>materializer</td>
                            <td className='td_value'>{node.materializer}</td>
                        </tr>
                        <tr>
                            <td className='td_key'>name</td>
                            <td className='td_value'>{node.name}</td>
                        </tr>
                        <tr>
                            <td className='td_key'>producer_step_run_id</td>
                            <td className='td_value'>{node.producer_step_run_id}</td>
                        </tr>
                        <tr>
                            <td className='td_key'>type</td>
                            <td className='td_value'>{node.type}</td>
                        </tr>

                    </table>
                </>
                :
                ""}
        </>
    )
}

const Sidebar: React.FC<any> = ({ selectedNode }) => {

    const [sidebar, setSidebar] = useState(true);
    const [isStepNode, setIsStepNode] = useState(false);
    const [artifact, setArtifact] = useState([] as any);
    const [step, setStep] = useState([] as any);
    const sidebar_ref = useRef<HTMLInputElement>(null)

    console.log("__UNAUTH SELECTEDNODE SIDEVAR", selectedNode);


    // -----------------------------------------------------
    // REACT_APP_BASE_API_URL=https://appserver.zenml.io/api/v1
    // const [metadata, setMetaData] = useState([] as any);

    // let exe_id = `3fa85f64-5717-4562-b3fc-2c963f66afa6`;
    // let url = `https://appserver.zenml.io/api/v1/` + `artifacts/` + exe_id;

    const authToken = useSelector(sessionSelectors.authenticationToken);
    const fetchMetaData = async (type: boolean) => {
        // IF IS STEP THEN GO INSIDE IF, AND IF ARTIFACT GO INSIDE ELSE
        if (type) {
            console.log("__UNAUTH type : __STEP");
            await axios.get(
                `${process.env.REACT_APP_BASE_API_URL}/steps/${selectedNode.execution_id}`,
                {
                    headers: {
                        Authorization: `bearer ${authToken}`,
                    },
                },
            ).then((response) => {
                console.log("__UNAUTH fetchMetaData Sidebar", response)
                setStep(response?.data);
                return //Setting the response into state
            })
        } else {
            console.log("__UNAUTH type __ARTIFACT", type);

            await axios.get(
                `${process.env.REACT_APP_BASE_API_URL}/artifacts/${selectedNode.execution_id}`,
                {
                    headers: {
                        Authorization: `bearer ${authToken}`,
                    },
                },
            ).then((response) => {

                console.log("__UNAUTH fetchMetaData Sidebar artifact", response.data)
                setArtifact(response?.data); //Setting the response into state
                return
            })

        }

    };
    // -----------------------------------------------------

    async function FetchData(type: boolean) {
        await fetchMetaData(type);
    };

    useEffect(() => {

        if (selectedNode === null) return


        let type = "configuration" in selectedNode;
        console.log("__UNAUTH TYPE: ", type);

        if (type) {

            setIsStepNode(true);
            console.log("__UNAUTH type true")
            setSidebar(false);
            setSidebar(true);
        }
        else {
            setIsStepNode(false);
            console.log("__UNAUTH type false")
            setSidebar(false);
            setSidebar(true);

        }
        FetchData(type);
    }, [isStepNode]) //eslint-disable-line

    useEffect(() => {
        console.log({ sidebar_ref })
        if (!sidebar_ref) {
            // document.adds
        }
    })


    // CLICK OUTSIDE TO CLOSE THE SIDEBAR
    useEffect(() => {
        let handler = (event: any) => {
          if (!sidebar_ref.current?.contains(event.target)) {
            setSidebar(false);
            console.log("____SIDE", sidebar_ref.current)
          }
          else {
            console.log("____SIDE OUT", sidebar_ref.current)
          }
        }
    
        document.addEventListener('mousedown', handler);
        return () => {
          document.removeEventListener('mousedown', handler);
        }
      }, [])
    

    return (


        <div style={{ position: 'absolute', top: "0%", left: "100%", zIndex: 101 }}>
            {sidebar ?
                // <div style={{display:'flex',justifyContent:'flex-start',alignItems:'flex-start', flexDirection:'row', width:'60vw', height:'100vh', background:'green', position:'absolute', right:'0%'}}>
                <div className='siderbar11' ref={sidebar_ref}>
                    <div className='sidebar11_arrow'>
                        {sidebar ?
                            <img src={circleArrowSideOpen} alt={"close"} onClick={() => setSidebar(false)} />
                            :
                            <img src={circleArrowSideClose} alt={"close"} onClick={() => setSidebar(true)} />
                        }
                    </div>
                    <div className='siderBar_contentArea'>
                        <div className='sidebar_body11'>
                            {isStepNode ? <StepnodeTabHeader node={step} /> : <ArtifactTabHeader node={artifact} />}
                        </div>
                    </div>
                </div>
                // </div>
                :

                <div className='siderbar11_hidden'>
                    <div className='sidebar11_arrow_hidden'>
                        {sidebar ?
                            <img src={circleArrowSideOpen} alt={"close"} onClick={() => setSidebar(false)} />
                            :
                            <img src={circleArrowSideClose} alt={"close"} onClick={() => setSidebar(true)} />
                        }
                    </div>
                    <div className='siderBar_contentArea'>
                        <div className='sidebar_body11'>
                            {/* {isStepNode ? <StepnodeTabHeader node={step} /> : <ArtifactTabHeader node={artifact} />} */}
                        </div>
                    </div>
                </div>
                // <div style={{ position: 'absolute', right: -50, top: "100%", padding: '10px', height: "500px", display: "flex", alignItems: 'flex-end' }} className='closeSidebarBtn' ref={sidebar_ref}>
                //     <img src={circleArrowSideClose} alt={"close"} onClick={() => { setSidebar(true); console.log("clicked") }} style={{ zIndex: 100 }} />
                // </div>
            }
        </div>
    )
}

export default Sidebar


