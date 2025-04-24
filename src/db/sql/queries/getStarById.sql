SELECT 
    [StarId]
,   [FirstName]
,   [LastName]
,   [RankId]
,   [Dob]
,   [Height]
,   [Image]
,   [Filmography]
,   [StudioTalentGroupId]
,   [FirstScene]
,   [LatestScene]
FROM
[Star]
WHERE starId = @Id;