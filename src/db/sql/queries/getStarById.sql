SELECT 
    [TalentId]
,   [FirstName]
,   [LastName]
,   [Dob]
,   [Image]
,   [Filmography]
,   [Feet]
,   [Inches]
,   [StudioTalentGroupId]
,   [FirstScene]
,   [LatestScene]
FROM
[Talent]
WHERE TalentId = @Id;