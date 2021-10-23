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

    // AMC MEDEA
    '00_medea_design',
    '10_medea_api_builds',
    '10_medea_rpt_builds',
    '20_medea_dwh_design',

    // AMCN-MDM
    '00_amcn_mdm_design',
    '10_amcn_mdm_api_builds',
    '20_amcn_mdm_dwh_design',

    // AMCN-PORTAL
    '00_amcn_portal_design',
    '10_amcn_portal_api_builds',
    '10_amcn_portal_rpt_builds',
    '20_amcn_portal_dwh_design',

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


];

module.exports = {
    PATH: 'c:/projects/555',
    PROJECTS: projects,
}
