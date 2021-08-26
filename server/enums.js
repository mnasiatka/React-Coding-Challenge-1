const ReportType = {
    SPAM: 0,
    INFRINGES_PROPERTY: 1,
    VIOLATES_POLICIES: 2,
}

const ReportState = {
    OPEN: 0,
    BLOCKED: 1,
    RESOLVED: 2
}

module.exports = {
    ReportType,
    ReportState 
}