INSERT INTO dbo.Users (Id, Email, PasswordHash, PCOSFlag, PregnancyMode, CreatedAt)
VALUES 
(NEWID(), 'demo@example.com', 'hashedpassword123', 1, 0, GETUTCDATE());
SELECT TOP (1000) [Id]
      ,[Email]
      ,[PasswordHash]
      ,[PCOSFlag]
      ,[PregnancyMode]
      ,[CreatedAt]
  FROM [PeriodTrackerDb].[dbo].[Users]
  SELECT TOP (1) [Id], [Email] FROM dbo.Users;


