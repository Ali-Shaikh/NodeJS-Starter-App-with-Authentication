/*
 Navicat Premium Data Transfer

 Source Server         : mssql-01
 Source Server Type    : SQL Server
 Source Server Version : 14003030
 Source Host           : localhost:1433
 Source Catalog        : NodeLibrary
 Source Schema         : dbo

 Target Server Type    : SQL Server
 Target Server Version : 14003030
 File Encoding         : 65001

 Date: 04/08/2018 01:40:58
*/


-- ----------------------------
-- Table structure for Books
-- ----------------------------
IF EXISTS (SELECT * FROM sys.all_objects WHERE object_id = OBJECT_ID(N'[dbo].[Books]') AND type IN ('U'))
	DROP TABLE [dbo].[Books]
GO

CREATE TABLE [dbo].[Books] (
  [ID] int  IDENTITY(1,1) NOT NULL,
  [Title] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NOT NULL,
  [Author] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL,
  [Genre] varchar(255) COLLATE SQL_Latin1_General_CP1_CI_AS  NULL
)
GO

ALTER TABLE [dbo].[Books] SET (LOCK_ESCALATION = TABLE)
GO


-- ----------------------------
-- Records of [Books]
-- ----------------------------
SET IDENTITY_INSERT [dbo].[Books] ON
GO

INSERT INTO [dbo].[Books] ([ID], [Title], [Author], [Genre]) VALUES (N'2', N'War AND Peace', N'Lev Nikolayevich Tolstoy', N'Historical Fiction')
GO

INSERT INTO [dbo].[Books] ([ID], [Title], [Author], [Genre]) VALUES (N'3', N'Les Misérables', N'Victor Hugo', N'Historical Fiction')
GO

INSERT INTO [dbo].[Books] ([ID], [Title], [Author], [Genre]) VALUES (N'4', N'The Time Machine', N'H.G.Wells', N'Science Fiction')
GO

INSERT INTO [dbo].[Books] ([ID], [Title], [Author], [Genre]) VALUES (N'5', N'A Journey INTO the Center of the Earth', N'Jules Verne', N'Science Fiction')
GO

INSERT INTO [dbo].[Books] ([ID], [Title], [Author], [Genre]) VALUES (N'6', N'The Dark World', N'Henry Kuttner', N'Fantasy')
GO

INSERT INTO [dbo].[Books] ([ID], [Title], [Author], [Genre]) VALUES (N'7', N'The Wind IN the Willows', N'Kenneth Grahame', N'Fantasy')
GO

INSERT INTO [dbo].[Books] ([ID], [Title], [Author], [Genre]) VALUES (N'8', N'Life ON The Mississippi', N'Mark Twain', N'History')
GO

INSERT INTO [dbo].[Books] ([ID], [Title], [Author], [Genre]) VALUES (N'9', N'Childhood', N'Lev Nikolayevich Tolstoy', N'Biography')
GO

SET IDENTITY_INSERT [dbo].[Books] OFF
GO


-- ----------------------------
-- Primary Key structure for table Books
-- ----------------------------
ALTER TABLE [dbo].[Books] ADD CONSTRAINT [PK__Books__3214EC277C1B9500] PRIMARY KEY CLUSTERED ([ID])
WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON)  
ON [PRIMARY]
GO

