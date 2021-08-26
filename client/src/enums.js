export const ReportType = {
    SPAM: 0,
    INFRINGES_PROPERTY: 1,
    VIOLATES_POLICIES: 2,
}

export const ReportState = {
    OPEN: 0,
    BLOCKED: 1,
    RESOLVED: 2
}

export const ReportTypeString = {
    [ReportType.SPAM]: 'Spam',
    [ReportType.INFRINGES_PROPERTY]: 'Infringes Property',
    [ReportType.VIOLATES_POLICIES]: 'Violates Policies',
}

export const ReportStateString = {
    [ReportState.OPEN]: 'Open',
    [ReportState.BLOCKED]: 'Blocked',
    [ReportState.RESOLVED]: 'Resolved',
}