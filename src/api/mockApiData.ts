const mockApi = {
  loginMockResponse: {
    access_token: 'string',
    token_type: 'string',
  },
  signupMockResponse: {
    id: '246f9afe-d28c-4c31-89ed-b02c089b4374',
    name: 'johndoe',
    full_name: 'John Doe',
    email: 'johndoe@zenml.io',
    active: true,
    created_at: '2022-09-14T17:59:16.660668',
    updated_at: '2022-09-14T17:59:16.660668',
  },
  myWorkSpacesMockResponse: [
    {
      name: 'string',
      organization_id: 'string',
      user_ids: ['string'],
      provider_id: 'string',
      metadatastore_id: 'string',
      id: 'string',
      created_at: '2022-08-09T19:07:14.685Z',
    },
  ],
  myPipelinesMockResponse: [
    {
      id: '24db6395-669b-4e6d-8e60-cc2c4f6c47cf',
      name: 'example_pipeline',
      configuration: {},
      project: {
        id: '48533493-cb6d-4927-bc72-b8e998503d93',
        name: 'default',
        description: '',
        creation_date: '2022-09-16T14:03:35.567052',
      },
      user: {
        id: '3143dec6-450e-4909-bf3e-a5f389b2a566',
        name: 'default',
        full_name: '',
        email: '',
        active: 'True',
        created_at: '2022-09-16T14:03:35.918900',
        updated_at: '2022-09-16T14:03:35.918930',
      },
      creation_date: '2022-09-16T14:30:26.023422',
      runs: [
        {
          id: 'c3a15c1e-7f77-4cd7-9fe6-e2fde19b7a39',
          name: 'example_pipeline-16_Sep_22-14_30_25_931594',
          stack_id: '341dd1d4-13fe-4163-9921-a0587da31651',
          pipeline_id: '24db6395-669b-4e6d-8e60-cc2c4f6c47cf',
          runtime_configuration: {
            dag_filepath: 'zenml/examples/airflow_orchestration/run.py',
            run_name: 'example_pipeline-16_Sep_22-14_30_25_931594',
          },
          status: 'Succeeded',
          zenml_version: '0.13.2',
          mlmd_id: 2,
          user: '3143dec6-450e-4909-bf3e-a5f389b2a566',
          creation_date: '2022-09-16T14:30:26.119091',
        },
        {
          id: '46e1e41f-9436-45ef-a4e8-46976dbbe6b8',
          name: 'airflow_example_pipeline-16_Sep_22-14_30_53_621455',
          stack_id: '341dd1d4-13fe-4163-9921-a0587da31651',
          pipeline_id: '24db6395-669b-4e6d-8e60-cc2c4f6c47cf',
          runtime_configuration: {
            dag_filepath: '/zenml/examples/airflow_orchestration/run.py',
            run_name: 'example_pipeline-16_Sep_22-14_30_53_621455',
          },
          status: 'Running',
          zenml_version: '0.13.2',
          mlmd_id: 12,
          user: '3143dec6-450e-4909-bf3e-a5f389b2a566',
          creation_date: '2022-09-16T14:30:53.779004',
        },
        {
          id: '0c4eac13-4691-4035-8836-ca12b5331eaa',
          name: 'airflow_example_pipeline-16_Sep_22-14_31_05_349435',
          stack_id: '341dd1d4-13fe-4163-9921-a0587da31651',
          pipeline_id: '24db6395-669b-4e6d-8e60-cc2c4f6c47cf',
          runtime_configuration: {
            dag_filepath: '/examples/airflow_orchestration/run.py',
            run_name: 'example_pipeline-16_Sep_22-14_31_05_349435',
          },
          status: 'Failed',
          zenml_version: '0.13.2',
          mlmd_id: 15,
          user: '3143dec6-450e-4909-bf3e-a5f389b2a566',
          creation_date: '2022-09-16T14:31:05.498228',
        },
      ],
    },
  ],
  // old response, will remove this code later
  // {
  //   id: '9lg2jk3',
  //   organization_id: 'string',
  //   name: 'prod_stack',
  //   project_name: 'string',
  //   components: [
  //     {
  //       id: 'asdf2-asdf1-ad143',
  //       type: 'alerter',
  //       flavor: 'slack',
  //       name: 'slack_alerter',
  //       config: {
  //         slack_token: 'INFU1328UJ',
  //         default_slack_channel_id: 184195,
  //       },
  //     },
  //   ],
  //   creator: 'Hamza Tahir',
  //   creation_date: '2022-08-12T07:12:45.931Z',
  // },
  // {
  //   name: 'string',
  //   pipeline_config: {},
  //   project_name: 'string',
  //   id: 'string',
  //   created_at: '2022-08-09T18:55:34.972Z',
  //   organization_id: 'string',
  //   user_id: 'string',
  //   pipeline_runs: [
  //     {
  //       id: 'string',
  //       user_id: 'string',
  //       status: 'string',
  //       start_time: '2022-08-09T18:55:34.972Z',
  //       end_time: '2022-08-09T18:55:34.972Z',
  //       workers: 0,
  //       cpus_per_worker: 0,
  //       datasource_commit_id: 'string',
  //       pipeline_run_type: 'string',
  //       pipeline_components: [
  //         {
  //           start_time: '2022-08-09T18:55:34.972Z',
  //           end_time: '2022-08-09T18:55:34.972Z',
  //           status: 'string',
  //           component_type: 'string',
  //         },
  //       ],
  //       processing_backend_id: 'string',
  //       orchestration_backend_id: 'string',
  //       training_backend_id: 'string',
  //       serving_backend_id: 'string',
  //       training_args: {},
  //       serving_args: {},
  //     },
  //   ],
  // },
  pipelinesByWorkspacesIdMockResponse: [
    // new response
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      name: 'prd_stack',
      description: 'Stack for Production use.',
      components: {
        additionalProp1: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          name: 'string',
          type: 'alerter',
          flavor_name: 'string',
          configuration: {
            additionalProp1: 'string',
            additionalProp2: 'string',
            additionalProp3: 'string',
          },
          is_shared: false,
          project_id: 'op985f64-5717-4562-b3fc-2c963f66afa6',
          user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          user_name: 'Hamza Tahir',
          creation_date: '2022-08-12T07:12:45.931Z',
        },
        additionalProp2: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          name: 'string',
          type: 'alerter',
          flavor_name: 'string',
          configuration: {
            additionalProp1: 'string',
            additionalProp2: 'string',
            additionalProp3: 'string',
          },
          is_shared: false,
          project_id: 'op985f64-5717-4562-b3fc-2c963f66afa6',
          user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          user_name: 'Hamza Tahir',
          creation_date: '2022-08-12T07:12:45.931Z',
        },
        additionalProp3: {
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          name: 'string',
          type: 'alerter',
          flavor_name: 'string',
          configuration: {
            additionalProp1: 'string',
            additionalProp2: 'string',
            additionalProp3: 'string',
          },
          is_shared: false,
          project_id: 'op985f64-5717-4562-b3fc-2c963f66afa6',
          user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          user_name: 'Hamza Tahir',
          creation_date: '2022-08-12T07:12:45.931Z',
        },
      },
      is_shared: false,
      project_id: 'op985f64-5717-4562-b3fc-2c963f66afa6',
      user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      user_name: 'Hamza Tahir',
      creation_date: '2022-08-12T07:12:45.931Z',
    },

    // {
    //   id: '9lg2jk3',
    //   organization_id: 'string',
    //   project_name: 'string',
    //   name: 'prod_stack',
    //   components: [
    //     {
    //       id: 'asdf2-asdf1-ad143',
    //       type: 'alerter',
    //       flavor: 'slack',
    //       name: 'slack_alerter',
    //       config: {
    //         slack_token: 'INFU1328UJ',
    //         default_slack_channel_id: 184195,
    //       },
    //     },
    //   ],
    //   creator: 'Hamza Tahir',
    //   creation_date: '2022-08-12T07:12:45.931Z',
    // },
    // {
    //   name: 'string',
    //   pipeline_config: {},
    //   project_name: 'string',
    //   id: 'string',
    //   created_at: '2022-08-09T19:08:54.541Z',
    //   organization_id: 'string',
    //   user_id: 'string',
    //   pipeline_runs: [
    //     {
    //       id: 'string',
    //       user_id: 'string',
    //       status: 'string',
    //       start_time: '2022-08-09T19:08:54.541Z',
    //       end_time: '2022-08-09T19:08:54.541Z',
    //       workers: 0,
    //       cpus_per_worker: 0,
    //       datasource_commit_id: 'string',
    //       pipeline_run_type: 'string',
    //       pipeline_components: [
    //         {
    //           start_time: '2022-08-09T19:08:54.541Z',
    //           end_time: '2022-08-09T19:08:54.541Z',
    //           status: 'string',
    //           component_type: 'string',
    //         },
    //       ],
    //       processing_backend_id: 'string',
    //       orchestration_backend_id: 'string',
    //       training_backend_id: 'string',
    //       serving_backend_id: 'string',
    //       training_args: {},
    //       serving_args: {},
    //     },
    //   ],
    // },
  ],

  pipelineByIdMockResponse: {
    // id: '9lg2jk3',
    // organization_id: 'string',
    // name: 'prod_stack',
    // project_name: 'string',
    // components: [
    //   {
    //     id: 'asdf2-asdf1-ad143',
    //     type: 'alerter',
    //     flavor: 'slack',
    //     name: 'slack_alerter',
    //     config: {
    //       slack_token: 'INFU1328UJ',
    //       default_slack_channel_id: 184195,
    //     },
    //   },
    // ],
    // creator: 'Hamza Tahir',
    // creation_date: '2022-08-12T07:12:45.931Z',
    // name: 'string',
    // pipeline_config: {},
    // project_name: 'string',
    // id: 'string',
    // created_at: '2022-08-09T18:59:01.847Z',
    // organization_id: 'string',
    // user_id: 'string',
    // pipeline_runs: [
    //   {
    //     id: 'string',
    //     user_id: 'string',
    //     status: 'string',
    //     start_time: '2022-08-09T18:59:01.847Z',
    //     end_time: '2022-08-09T18:59:01.847Z',
    //     workers: 0,
    //     cpus_per_worker: 0,
    //     datasource_commit_id: 'string',
    //     pipeline_run_type: 'string',
    //     pipeline_components: [
    //       {
    //         start_time: '2022-08-09T18:59:01.847Z',
    //         end_time: '2022-08-09T18:59:01.847Z',
    //         status: 'string',
    //         component_type: 'string',
    //       },
    //     ],
    //     processing_backend_id: 'string',
    //     orchestration_backend_id: 'string',
    //     training_backend_id: 'string',
    //     serving_backend_id: 'string',
    //     training_args: {},
    //     serving_args: {},
    //   },
    // ],
  },
  runByIdMockResponse: {
    id: 'string',
    user_id: 'string',
    status: 'string',
    start_time: '2022-08-09T19:02:24.141Z',
    end_time: '2022-08-09T19:02:24.141Z',
    workers: 0,
    cpus_per_worker: 0,
    datasource_commit_id: 'string',
    pipeline_run_type: 'string',
    pipeline_components: [
      {
        start_time: '2022-08-09T19:02:24.141Z',
        end_time: '2022-08-09T19:02:24.141Z',
        status: 'string',
        component_type: 'string',
      },
    ],
    processing_backend_id: 'string',
    orchestration_backend_id: 'string',
    training_backend_id: 'string',
    serving_backend_id: 'string',
    training_args: {},
    serving_args: {},
  },
  myOrganizationMockResponse: {
    name: 'string',
    id: 'string',
    created_at: '2022-08-09T18:54:03.919Z',
    bucket_name: 'string',
    service_account: {},
    organizationMembers: [
      {
        id: '246f9afe-d28c-4c31-89ed-b02c089b4374',
        name: 'Haziq',
        full_name: 'Haziq',
        email: 'Haziq@zenml.io',
        active: false,
        activation_token:
          'e97b3c26f9fc8020ea2f602c5d3bdda66662c60ddbf60cbbf70d119ef5b07bdc',
        created_at: '2022-09-14T17:59:16.660668',
        updated_at: '2022-09-14T17:59:16.660668',
      },
      {
        id: '246f9afe-d28c-4c31-89ed-b02c089b4374',
        name: 'Hamza',
        full_name: 'Hamza',
        email: 'Hamza@zenml.io',
        active: false,
        activation_token:
          'e97b3c26f9fc8020ea2f602c5d3bdda66662c60ddbf60cbbf70d119ef5b07bdc',
        created_at: '2022-09-14T17:59:16.660668',
        updated_at: '2022-09-14T17:59:16.660668',
      },
      {
        id: '246f9afe-d28c-4c31-89ed-b02c089b4374',
        name: 'Daniel',
        full_name: 'Daniel',
        email: 'Daniel@zenml.io',
        active: false,
        activation_token:
          'e97b3c26f9fc8020ea2f602c5d3bdda66662c60ddbf60cbbf70d119ef5b07bdc',
        created_at: '2022-09-14T17:59:16.660668',
        updated_at: '2022-09-14T17:59:16.660668',
      },
    ],
    myOrganizationInviteMockResponse: {
      id: '246f9afe-d28c-4c31-89ed-b02c089b4374',
      name: 'john@zenml.io',
      full_name: 'John Doe',
      email: 'john@zenml.io',
      active: false,
      activation_token:
        'e97b3c26f9fc8020ea2f602c5d3bdda66662c60ddbf60cbbf70d119ef5b07bdc',
      created_at: '2022-09-14T17:59:16.660668',
      updated_at: '2022-09-14T17:59:16.660668',
    },
  },
  userByIdMockResponse: {
    email: 'string',
    full_name: 'string',
    organization_id: 'string',
    n_pipelines_executed: 0,
    firebase_id: 'string',
    id: 'string',
    created_at: '2022-08-09T19:05:25.137Z',
    role_id: 'string',
  },
  myUserMockResponse: {
    id: "246f9afe-d28c-4c31-89ed-b02c089b4374",
    name: 'htahir',
    full_name: "Hamza Tahir",
    email: "htahir@zenml.io",
    active: true,
    organization_id: 'string'
  },
  allRunsByPipelineId: [
    {
      id: '68be3034',
      name: 'cat_detection_training_pipeline_run_4921',
      zenml_version: '0.12.0',
      duration: 'string',
      git_sha: '73841b4',
      pipeline: {
        name: 'cat_detection_training_pipeline',
        id: '9eaa2d6',
      },
      stack: {
        name: 'prod_stack',
        id: '9lg2jk3',
      },
      status: 'Succeeded',
      project_id: 'op985f64-5717-4562-b3fc-2c963f66afa6',
      user_id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      user_name: 'Hamza Tahir',
      creation_date: '2022-08-12T07:12:45.931Z',
    },
  ],
  // myUserMockResponse: {
  //   email: 'string',
  //   full_name: 'string',
  //   organization_id: 'string',
  //   n_pipelines_executed: 0,
  //   firebase_id: 'string',
  //   id: 'string',
  //   created_at: '2022-08-09T18:51:01.010Z',
  //   role_id: 'string',
  // },
  stackComponentTypes: ['alerter'],
  stackComponentList: [
    {
      id: '5e4286b5-51f4-4286-b1f8-b0143e9a27ce',
      name: 'vertex_prd_orchestrator',
      type: 'orchestrator',
      flavor: 'vertex',
      configuration: {
        location: 'europe-west3',
      },
      isShared: true,
      project: 'da63ad01-9117-4082-8a99-557ca5a7d324',
      user: {
        id: 'ae1fd828-fb3b-48e8-a31a-f3ecb3cdb294',
        name: 'default',
        full_name: '',
        email: '',
        active: 'True',
        created: '2022-09-15T11:43:29.987627',
        updated: '2022-09-15T11:43:29.987627',
      },
      created_at: '2022-08-12T07:12:44.931Z',
    },
    {
      id: '5esdsdb5-51f4-4286-b1f8-b0143e9a27ce',
      name: 'vertex_prd_orchestrator',
      type: 'orchestrator',
      flavor: 'vertex',
      configuration: {
        location: 'europe-west3',
      },
      isShared: false,
      project: 'da63ad01-9117-4082-8a99-557ca5a7d324',
      user: {
        id: 'ae1fd828-fb3b-48e8-a31a-f3ecb3cdb294',
        name: 'default',
        full_name: '',
        email: '',
        active: 'True',
        created: '2022-09-15T11:43:29.987627',
        updated: '2022-09-15T11:43:29.987627',
      },
      created_at: '2022-08-12T07:12:44.931Z',
    },
  ],
};
export default mockApi;