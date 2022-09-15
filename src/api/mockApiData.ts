const mockApi = {
  loginMockResponse: {
    access_token: 'string',
    token_type: 'string',
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
  ],
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
    id: 'w813dw',
    name: 'htahir',
    creation_date: '2022-09-08T19:23:58.197Z',
    organization_id: 'string',
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
      status: 'Finished',
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
};
export default mockApi;
