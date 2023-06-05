'use strict';

const projects = [
    // AMC AUTH
    '00_auth_design',
    '10_auth_api_builds',
    '10_auth_logout',
    '20_auth_copy_tables',
    '40_auth_docs',

    // AMC CCC Project
    '00_ccc_design',
    '10_ccc_api_builds',
    '10_ccc_dwh',
    '20_ccc_dwh_design',

    // AMC 2ndPartyMedia
    '00_2ndPartyMedia_design',

    // AMC-ADFREE
    '00_adfree_design',
    '00_adfree_sqs_design',
    '10_adfree_sqs_builds',
    '20_dwh_adfree',
    'adfree_api_builds',
    'adfree_rpt_builds',
    '20_svod_dwh_design',

    // AMC-AuroraVTS
    '00_auroravts_design',
    '10_auroravts_api_builds',
    '10_auroravts_rpt_builds',
    '20_auroravts_dwh_design',

    // AMC_CIA
    '00_cia_design',
    '10_cia_api_builds',
    '10_cia_rpt_builds',
    '20_cia_dwh_design',

    //AMC Cognos Reporting

    // AMC-CORE-GUI
    '00_amc_docs',
    '10_amc_login_module_builds',
    'amc-3D',
    'amc-chrome-ext-menu',
    'amc-license-agreement',
    'amc-login-module',
    'amc-materialize',
    'amc-ui-packages-checker',
    'common-resources-ng1',
    'components',
    'eslint-plugin-use-decorator',
    'segments',

    // AMC DDM Project
    '00_ddm_design',
    '10_dwh_ddm',
    '80_ddm_ml_sources',
    '90_ddm_docs',
    'ddm_api_builds',
    'ddm_rpt_builds',

    // AMC_DEG
    '00_deg_design',
    '10_deg_api_builds',
    '20_deg_dwh_design',

    // AMC-ESTIMATOR-DIGITAL
    '00_estdgt_design',
    '10_estdgt_api_builds',
    '10_estdgt_rpt_builds',
    '20_estdgt_dwh_design',

    // AMC ESTIMATOR INTERNATIONAL
    '00_est_int_design',
    '10_est_int_api_builds',
    '10_est_int_rpt_builds',
    '20_est_int_dwh_design',

    // AMC_FAST
    '00_fast_design',
    '00_ml_server_fast',
    '00_service_runner_fast',
    '10_fast_api_builds',
    '10_fast_rpt_builds',
    '20_fast_dwh_design',

    // AMC-MDM
    '00_blackbox_mdm',
    '00_global_mdm_design',
    '00_mdm_design',
    '10_mdm_api_builds',
    '10_mdm_rpt_builds',
    '20_mdm_dwh_design',
    '20_mdm_mssql_dwh_design',
    '10_amcn_mdm_rpt_builds',

    // AMC MEDEA
    '00_medea_design',
    '10_medea_api_builds',
    '10_medea_rpt_builds',
    '20_medea_dwh_design',

    // AMCN-MDM
    '00_amcn_mdm_design',
    '10_amcn_mdm_api_builds',
    '20_amcn_mdm_dwh_design',
    'js_tm_api',

    // AMCN-PORTAL
    '00_amcn_portal_design',
    '10_amcn_portal_api_builds',
    '10_amcn_portal_rpt_builds',
    '20_amcn_portal_dwh_design',
    '20_prj_dwh_design',

    // AMC PAT Project
    '00_pat_design',
    '10_dwh_pat',
    '90_pat_docs',
    'pat_api_builds',
    'pat_rpt_builds',
    'promo_2.0_api_builds',
    'promo_2.0_design',
    'promo_2.0_rpt_builds',

    // AMC-TVE
    '00_tve_design',
    '20_tve_dwh_design',
    'tve_api_builds',
    'tve_rpt_builds',

    // Mediator2
    '00_mediator2_design',
    '10_dwh_mediator',
    '10_mediator2_api_builds',
    'mediator_rpt_builds',
    'mediator_api_builds',

    // Finance
    '00_finance_commons_design',
    '10_finance_rpt_builds',
    '20_finance_dwh_design',

    // COMMONS
    '00_adfree_commons_design',
    '00_estdgt_commons_design',

    // Prefect
    '00_prefect_common_design',
    '00_prefect_aws_glue_design',

    // DWH
    '00_crm_dwh_design',
    '10_dwh_estimator',
    '10_dwh_admin_flex',
    '20_digital_ssp_dwh_design',
    '10_dwh_adsales',
    '20_psvod_att_dwh_design',
    '10_dwh_digitalboard',
    '20_data_analysis_dwh_design',
    '10_dwh_namrld',
    '20_cognos_reports_dwh_design',
    '10_dwh_mit',
    '20_psvod_dwh_design',
    '10_dwh_scoreboard',
    '20_dwh_namrld_cz',
    '20_dwh_namrld_hun',
    '20_schedule_dwh_design',
    '20_dwh_namrld_rom',
    '10_dwh_promoplacement',

    // Plugins
    '00_plugins_control_design',
    '10_plugins_control_api_builds',

    // Prj
    '00_prj_design',

    // Recsys
    '00_recsys_design',

    // ml
    'ml-server',
    'ml_individual_model',
    'ml_contribution_model',

    // 2023
    '10_finance_api_builds',

    // 2022
    'amc-ui-plugins-control',
    '00_data_analysis_design',
    '00_dwh_analysis',
    '00_task_runner',
    '00_dgtfed_design',
    '00_cognos_reports_design',
    '00_psvod_design',
    '00_mdr_design',
    '00_psvod_att_design',
    '00_demosvod_design',
    '10_dgtfed_rpt_builds',
    '10_cognos_reports_rpt_builds',
    'adsales_rpt_builds',
    'estimator_rpt_builds',
    '10_prj_rpt_builds',
    '10_demosvod_rpt_builds',
    '10_psvod_att_rpt_builds',
    'estimator_api_builds',
    'hapi',
    '10_dgtfed_api_builds',
    '10_cognos_reports_api_builds',
    '10_data_analysis_api_builds',
    '10_demosvod_api_builds',
    '10_psvod_att_api_builds',
    '10_prj_api_builds',

    // 2022
    'amc-teams',
    'amc-exception',
    'amc-server',
    'amc-auth-rest',
    'amc-auth',
    'amc-auth-rest-server',
    'amc-auth-server',
    'amc-modules',
    'amc-data-provider',

    // 2021
    'amc-plugins-control',
    '00_devops_dashboard_api',
    '00_devops_dashboard_gui',
    'hapi-good-squeeze',
    'hapi-good',
    'adsales_api_builds',
    'amc-api-utils',
    '10_devops_dashboard_api_builds',
    'amc-nes-server',
    'amc-nes-client',
    'amc-project-builder',
    'amc-reporter',
    'amc-container-runner',
    'amc-messaging',
    'amc-auth_validation',
    'amc-s3',
    'amc-models-runner',
    'amc-mailer',
    'amc-basedb',
    'amc-metrics',
    'amc-logger',
    'amc-task-register',
    'amc-r-task-runner',
    'amc-task-runner',
    'amc-http2',
    'amc-cache-client',
    'amc-proxy',
    'amc-threading',

    // 2020
    '00_jms_design',
    'hapi-bell',
    'amc-plugin-prj',
    'amc-voice-control',
    'amc-csv-s3-db',
    'amc-check',

    // 2019
    '00_svod_design',
    '10_ccc_rpt_builds',
    '10_svod_rpt_builds',
    'digitalboard_api_builds',
    '10_svod_api_builds',
    'amc-estdgt-timeline',

    // 2018
    '00_dwh_design',
    '00_pat_design',
    '00_global_design',
    'promo_rpt_builds',
    'bitbucket_user_manager_plugin',

    // 2017
    '00_edw_models',

];

module.exports = {
    PATH: 'c:/projects/555',
    PROJECTS: projects,
}
