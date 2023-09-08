-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 08, 2023 at 11:35 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.1.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `elearning`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` varchar(36) NOT NULL,
  `admin_username` varchar(2000) NOT NULL,
  `admin_password` varchar(2000) NOT NULL,
  `admin_token` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `book`
--

CREATE TABLE `book` (
  `book_id` varchar(36) NOT NULL,
  `book_title` varchar(1000) NOT NULL,
  `book_details` varchar(5000) NOT NULL,
  `book_author` varchar(1000) DEFAULT NULL,
  `book_purchases` int(100) NOT NULL DEFAULT 0,
  `book_price` float DEFAULT NULL,
  `book_rating` float DEFAULT 0,
  `book_date_created` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `book_title`, `book_details`, `book_author`, `book_purchases`, `book_price`, `book_rating`, `book_date_created`) VALUES
('302a22a5-9c96-4cd6-8acc-f117517671c3', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('38c587b0-a905-4815-b5ca-ff60b6d40cbc', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('3a1fc32f-5129-403a-a805-1a661a4b1da2', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('4a444a43-9660-484b-a702-9f65860c13dc', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('4f94ab5c-f75e-4b6f-b0e2-d43b2052a1b4', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('56f6d8b0-55dc-48a6-a2c5-f3072e11a046', 'hero withe ths', 'ldskjfd thewois ', 'dklskjdfldkj dsk', 0, 23, 0, NULL),
('571c7651-2ac7-4bc9-9be6-e4ade251e766', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('669a263e-5b8d-43c8-ba1f-85b2f46be774', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('684f6903-bda6-4035-968e-d604d1c33f68', 'dlsjdslkfjd', ';sdfjklfjksdfjsdl', 'lsdkfjdsklfjdsflkjfs', 0, 12, 0, NULL),
('6a9bb2d2-0052-43de-996c-a9238deecf89', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('72c15bad-6845-47c3-9851-5568d6d661f6', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('768b80a4-d037-42f0-8f6e-a1110836892d', 'Diary of a ceo', 'Steven', 'a book is here', 0, 120, 0, NULL),
('774bcc03-7bd7-4e5c-8b52-fb8631e21bd7', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('78504e96-72b3-40bf-b9c5-0d1be00afb21', 'hero withe ths', 'ldskjfd thewois ', 'dklskjdfldkj dsk', 0, 23, 0, NULL),
('78bf4ad0-369a-495d-bfb1-8e69dd0f3afe', 'hero withe ths', 'ldskjfd thewois ', 'dklskjdfldkj dsk', 0, 23, 0, NULL),
('79cacd3e-1c29-43e1-9d93-37bf023d8991', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('88175803-bb22-4fbb-a910-1f523aa87f6c', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('a97d6b4c-2bdb-458b-aa91-10001ac20545', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('abaf379f-d125-4ed2-8385-7c2c791ef192', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('c3658f66-7d44-4dc9-a27d-0316620c0fb9', 'ldksfjfdkfjlk', 'klsjfdjfklsdjfsld', 'ljksdfjdlskfjlskdf', 0, 2, 0, NULL),
('d26dbcf5-4e74-419a-817d-a8197b086203', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('f03060ca-68a0-4c57-9350-d545f5d5de49', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('fab1d923-f073-425d-b1c6-db8e5bba2f37', 'hero withe ths', 'ldskjfd thewois ', 'dklskjdfldkj dsk', 0, 23, 0, NULL),
('fca82205-d847-45b3-ace0-500ea245a2fd', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL),
('fe2b810b-f4c2-4dd9-890f-2c78e73830ae', 'dssdfsdfds', 'dsffsdfdsfsdfsd', 'dsfsdfdsfdsf', 0, 12, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `book_id` varchar(36) NOT NULL,
  `course_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` varchar(36) NOT NULL,
  `category_name` varchar(1000) NOT NULL,
  `category_type` int(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category_join`
--

CREATE TABLE `category_join` (
  `category_join_id` varchar(36) NOT NULL,
  `course_id` varchar(36) NOT NULL,
  `book_id` varchar(36) NOT NULL,
  `category_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `certificate`
--

CREATE TABLE `certificate` (
  `certificate_id` varchar(36) NOT NULL,
  `certificate_body` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` varchar(36) NOT NULL,
  `course_title` varchar(1000) NOT NULL,
  `course_details` varchar(1000) NOT NULL,
  `course_level` varchar(1000) NOT NULL,
  `course_certificate` tinyint(1) NOT NULL DEFAULT 1,
  `course_students` int(100) NOT NULL DEFAULT 0,
  `course_rating` varchar(100) DEFAULT '0',
  `course_sections` int(10) NOT NULL DEFAULT 0,
  `course_archived` tinyint(1) DEFAULT 0,
  `course_price` double NOT NULL,
  `course_instructor` varchar(100) DEFAULT NULL,
  `course_max_comments` int(100) NOT NULL DEFAULT 5,
  `course_total_hour` int(100) DEFAULT NULL,
  `course_date_created` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_id`, `course_title`, `course_details`, `course_level`, `course_certificate`, `course_students`, `course_rating`, `course_sections`, `course_archived`, `course_price`, `course_instructor`, `course_max_comments`, `course_total_hour`, `course_date_created`) VALUES
('19a45b62-6f39-4034-8ca1-85770e6c7193', 'llsdjkfjkdsljflsdkjfsdljfkld', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 0, 0, 12, 'ksljdflfksdjfkldsjfksdlfjdskl', 5, 13, '2023-09-07 23:09:37.000000'),
('5a0398dc-8998-4409-b9a5-f1adf380f3a1', 'sdfdsfsdfsd', 'fsdffssssssssss', 'Beginner', 1, 0, '0', 0, 0, 345, 'sdfghjk', 5, 23, '2023-09-08 00:09:57.000000'),
('9154f207-9a25-418c-9b87-34257ef565d9', 'llsdjkfjkdsljflsdkjfsdljfkld', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 0, 0, 12, 'ksljdflfksdjfkldsjfksdlfjdskl', 5, 13, '2023-09-07 23:22:04.000000'),
('985af890-025f-4cdb-a425-858d48d9c49a', 'llsdjkfjkdsljflsdkjfsdljfkld', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 0, 0, 12, 'ksljdflfksdjfkldsjfksdlfjdskl', 5, 13, '2023-09-07 23:12:52.000000'),
('a18537b7-7716-4db6-b21d-598d8843b258', 'sdfdsfsdfsd', 'fsdffssssssssss', 'Beginner', 1, 0, '0', 0, 0, 345, 'sdfghjk', 5, 23, '2023-09-08 00:08:00.000000'),
('c6bf0b68-0c74-47d6-9320-26a58757c6c6', 'llsdjkfjkdsljflsdkjfsdljfkld', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 0, 0, 12, 'ksljdflfksdjfkldsjfksdlfjdskl', 5, 13, '2023-09-07 23:11:44.000000'),
('dac3dedc-5544-44e2-b76f-6a4f67a601aa', 'llsdjkfjkdsljflsdkjfsdljfkld', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 0, 0, 12, 'ksljdflfksdjfkldsjfksdlfjdskl', 5, 13, '2023-09-07 23:20:22.000000'),
('faa2c699-971d-4394-9db9-edef4df7962c', 'sdfdsfsdfsd', 'fsdffssssssssss', 'Beginner', 1, 0, '0', 0, 0, 345, 'sdfghjk', 5, 23, '2023-09-08 00:21:23.000000');

-- --------------------------------------------------------

--
-- Table structure for table `enrolled`
--

CREATE TABLE `enrolled` (
  `enrolled_id` varchar(36) NOT NULL,
  `enrolled_token` varchar(1000) NOT NULL,
  `enrolled_course_completion` tinyint(1) NOT NULL DEFAULT 0,
  `enrolled_date` datetime(6) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `course_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `grade`
--

CREATE TABLE `grade` (
  `grade_id` varchar(36) NOT NULL,
  `section_id` varchar(36) NOT NULL,
  `enrolled_id` varchar(36) NOT NULL,
  `grade` float DEFAULT NULL,
  `completed` tinyint(1) NOT NULL DEFAULT 0,
  `link` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `graduate`
--

CREATE TABLE `graduate` (
  `graduate_id` varchar(36) NOT NULL,
  `graduate_date` datetime(6) NOT NULL,
  `certificate_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `purchase_id` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `book_id` varchar(36) NOT NULL,
  `purchase_token` varchar(1000) NOT NULL,
  `purchase_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `section`
--

CREATE TABLE `section` (
  `section_id` varchar(36) NOT NULL,
  `section_title` varchar(1000) NOT NULL,
  `section_description` varchar(5000) NOT NULL,
  `section_type` int(10) NOT NULL,
  `section_roll_number` int(10) NOT NULL,
  `section_content` varchar(2000) NOT NULL,
  `section_value` varchar(5000) DEFAULT NULL,
  `course_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `user_id` varchar(36) NOT NULL,
  `user_email` varchar(2000) NOT NULL,
  `user_password` varchar(2000) NOT NULL,
  `user_photo` varchar(2000) DEFAULT NULL,
  `user_token` varchar(2000) DEFAULT NULL,
  `user_full_name` varchar(1000) NOT NULL,
  `user_date_joined` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `user_email`, `user_password`, `user_photo`, `user_token`, `user_full_name`, `user_date_joined`) VALUES
('ef8202ae-2188-44d7-8bb1-da4b2ee4a3a3', 'haileyabsera3@gmail.com', '$2a$10$/TmjzMTEsE06YqcLE/uRj.WVsoGSP2Wxd5ieH/8ydu0OwefVzAoa6', NULL, NULL, 'Natan Mekebib', '2023-09-07 21:52:13.984000');

-- --------------------------------------------------------

--
-- Table structure for table `web_content`
--

CREATE TABLE `web_content` (
  `web_content_id` varchar(36) NOT NULL,
  `goal_title` varchar(1000) DEFAULT NULL,
  `hero_title` varchar(1000) DEFAULT NULL,
  `goal_detail` varchar(2000) DEFAULT NULL,
  `hero_detail` varchar(2000) DEFAULT NULL,
  `lesson_title` varchar(1000) DEFAULT NULL,
  `lesson_detail` varchar(2000) DEFAULT NULL,
  `action_title` varchar(1000) DEFAULT NULL,
  `action_detail` varchar(2000) DEFAULT NULL,
  `mentor_title` varchar(1000) DEFAULT NULL,
  `mentor_detail` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `web_content`
--

INSERT INTO `web_content` (`web_content_id`, `goal_title`, `hero_title`, `goal_detail`, `hero_detail`, `lesson_title`, `lesson_detail`, `action_title`, `action_detail`, `mentor_title`, `mentor_detail`) VALUES
('11f1e0fd-4bea-11ee-9cc4-0a002700000a', 'fkdslaskdjfklskslkdffjjfdkslls', 'hero title woohoo kdslkjsdlfjs', 'fkdslaskdjfklskslkdffjjfdkslls', 'hero details over here', 'lessson title is up here', 'fkdslaskdjfklskslkdffjjfdkslls', 'fkdslaskdjfklskslkdffjjfdkslls', 'fkdslaskdjfklskslkdffjjfdkslls', 'fkdslaskdjfklskslkdffjjfdkslls', 'fkdslaskdjfklskslkdffjjfdkslls');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`book_id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD KEY `book_id` (`book_id`),
  ADD KEY `course_id` (`course_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `category_join`
--
ALTER TABLE `category_join`
  ADD KEY `course_id` (`course_id`),
  ADD KEY `book_id` (`book_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `certificate`
--
ALTER TABLE `certificate`
  ADD PRIMARY KEY (`certificate_id`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `enrolled`
--
ALTER TABLE `enrolled`
  ADD PRIMARY KEY (`enrolled_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `enrolled_ibfk_2` (`course_id`);

--
-- Indexes for table `grade`
--
ALTER TABLE `grade`
  ADD PRIMARY KEY (`grade_id`),
  ADD KEY `grade_ibfk_1` (`enrolled_id`),
  ADD KEY `grade_ibfk_2` (`section_id`);

--
-- Indexes for table `graduate`
--
ALTER TABLE `graduate`
  ADD KEY `certificate_id` (`certificate_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD KEY `user_id` (`user_id`),
  ADD KEY `book_id` (`book_id`);

--
-- Indexes for table `section`
--
ALTER TABLE `section`
  ADD PRIMARY KEY (`section_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `web_content`
--
ALTER TABLE `web_content`
  ADD PRIMARY KEY (`web_content_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_3` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `cart_ibfk_4` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `category_join`
--
ALTER TABLE `category_join`
  ADD CONSTRAINT `category_join_ibfk_1` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `category_join_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `category_join_ibfk_3` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `enrolled`
--
ALTER TABLE `enrolled`
  ADD CONSTRAINT `enrolled_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `enrolled_ibfk_2` FOREIGN KEY (`course_id`) REFERENCES `course` (`course_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `grade`
--
ALTER TABLE `grade`
  ADD CONSTRAINT `grade_ibfk_1` FOREIGN KEY (`enrolled_id`) REFERENCES `enrolled` (`enrolled_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `grade_ibfk_2` FOREIGN KEY (`section_id`) REFERENCES `section` (`section_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `graduate`
--
ALTER TABLE `graduate`
  ADD CONSTRAINT `graduate_ibfk_1` FOREIGN KEY (`certificate_id`) REFERENCES `certificate` (`certificate_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `graduate_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `purchase_ibfk_2` FOREIGN KEY (`book_id`) REFERENCES `book` (`book_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
