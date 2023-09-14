-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 14, 2023 at 10:03 AM
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
  `book_date_created` datetime(6) DEFAULT NULL,
  `book_archived` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `book_title`, `book_details`, `book_author`, `book_purchases`, `book_price`, `book_rating`, `book_date_created`, `book_archived`) VALUES
('0cb1d33d-78cc-4fef-8a27-3d181573e6f3', 'Amharic book 3', 'another book top', 'Kebede\'s', 0, 57, 0, '2023-09-12 23:12:17.000000', 0),
('200f7364-70c8-40c7-a9fe-347e8172316d', 'smth', 'smth', 'smth', 0, 456, 0, '2023-09-13 00:56:32.000000', 1),
('7d0e78e3-2e4e-44f2-b073-2a3e92a4f5a8', 'Amharic book', 'description here', 'Kebede', 0, 457, 0, '2023-09-12 23:11:33.000000', 1),
('d8469824-120d-4222-a4a1-38afa68ea279', 'Amharic book', 'desc', 'Kebede', 0, 7800, 0, '2023-09-13 03:05:38.000000', 0);

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
('05054689-9bc3-471f-ab6f-970e8f56d05f', 'Psychology', 'psy', 'Intermediate', 1, 0, '0', 1, 0, 5600, 'Dagi', 5, 40, '2023-09-13 03:09:17.000000'),
('19a45b62-6f39-4034-8ca1-85770e6c7193', 'Tigrigna course', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 5, 0, 78, 'Kebede', 5, 12345, '2023-09-07 23:09:37.000000'),
('4c44cc8d-bce2-4ac5-9968-11821296afb4', 'Advaned Amharic Lesson ', 'Details ', 'Intermediate', 1, 0, '0', 1, 0, 200, 'Dr Abebe', 5, 3, '2023-09-13 04:00:43.000000'),
('5a0398dc-8998-4409-b9a5-f1adf380f3a1', 'sdfdsfsdfsd', 'fsdffssssssssss', 'Beginner', 1, 0, '0', 0, 1, 345, 'sdfghjk', 5, 23, '2023-09-08 00:09:57.000000'),
('9154f207-9a25-418c-9b87-34257ef565d9', 'llsdjkfjkdsljflsdkjfsdljfkld', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 1, 0, 12, 'ksljdflfksdjfkldsjfksdlfjdskl', 5, 13, '2023-09-07 23:22:04.000000'),
('985af890-025f-4cdb-a425-858d48d9c49a', 'Amharic Lesson 1', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 0, 0, 12, 'ksljdflfksdjfkldsjfksdlfjdskl', 5, 13, '2023-09-07 23:12:52.000000'),
('a18537b7-7716-4db6-b21d-598d8843b258', 'sdfdsfsdfsd', 'fsdffssssssssss', 'Beginner', 1, 0, '0', 0, 1, 345, 'sdfghjk', 5, 23, '2023-09-08 00:08:00.000000'),
('acfd41b1-d532-4782-ad46-a008a2f48aec', 'Amharic Lesson 2', 'Lesson details section', 'Beginner', 1, 0, '0', 0, 0, 908, 'Dagim', 5, 21, '2023-09-09 12:00:06.000000'),
('c1bdec10-d0f1-4894-8028-cd9803afb749', 'አምህሪች', 'ክድልስፍጅክ ', 'Beginner', 1, 0, '0', 0, 0, 56, 'ዳግም', 5, 123, '2023-09-12 22:12:43.000000'),
('c6bf0b68-0c74-47d6-9320-26a58757c6c6', 'llsdjkfjkdsljflsdkjfsdljfkld', 'klsjfdslkfjsdlkfjsdklfjdslkf', 'Advanced', 1, 0, '0', 0, 1, 12, 'ksljdflfksdjfkldsjfksdlfjdskl', 5, 13, '2023-09-07 23:11:44.000000'),
('c8c3fa7c-4050-4bf8-9fb1-23ca38cd511f', 'The nation', 'Dagim\'s personal favourite', 'Advanced', 1, 0, '0', 1, 0, 50000, 'Dagim', 5, 20, '2023-09-12 21:25:34.000000'),
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
  `section_type` varchar(10) NOT NULL,
  `section_content` varchar(2000) DEFAULT NULL,
  `section_value` int(100) DEFAULT NULL,
  `course_id` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `section`
--

INSERT INTO `section` (`section_id`, `section_title`, `section_description`, `section_type`, `section_content`, `section_value`, `course_id`) VALUES
('30599a3d-5916-41b5-b3b1-7a5d3b977e10', 'fhku', 'kjkli', 'quiz', 'http::/localhost:3000/smth', 67, '4c44cc8d-bce2-4ac5-9968-11821296afb4'),
('419fe520-3377-406a-9420-a50e9bc36bb5', 'Amharic section 4', 'deets', 'assignment', '12345', 0, '19a45b62-6f39-4034-8ca1-85770e6c7193'),
('7586418f-0fcf-4797-bc0c-db498d293c0a', 'Amharic section 6', 'some stufff', 'quiz', 'http::/localhost:3000/smth', 435, '19a45b62-6f39-4034-8ca1-85770e6c7193'),
('81364bc0-5762-49b7-84c3-601ec6e62a62', 'Amharic section 2', 'smth here', 'quiz', '10', 0, '19a45b62-6f39-4034-8ca1-85770e6c7193'),
('b93dbeed-b1e2-4a56-b319-4d1222ab448a', 'psy', 'chat', 'video', '', 0, '05054689-9bc3-471f-ab6f-970e8f56d05f'),
('c08fe0fc-5ac1-4586-ba7d-46c11ef9065b', 'Nation 1', 'This is the nation', 'video', '', 0, 'c8c3fa7c-4050-4bf8-9fb1-23ca38cd511f'),
('d282d158-b124-44c0-a301-696962e6ec7c', 'Amharic section 3', 'details', 'video', '0', 0, '19a45b62-6f39-4034-8ca1-85770e6c7193'),
('dbab244a-d114-473a-84f5-635db9bef7ce', 'Amharic section 1', 'section goes here', 'text', '0', 0, '19a45b62-6f39-4034-8ca1-85770e6c7193'),
('f99cd89b-2c6b-4517-a773-aa25a4593952', 'a section title', 'a section detail', 'text', '', 0, '9154f207-9a25-418c-9b87-34257ef565d9');

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
('ef8202ae-2188-44d7-8bb1-da4b2ee4a3a3', 'haileyabsera3@gmail.com', '$2a$10$/TmjzMTEsE06YqcLE/uRj.WVsoGSP2Wxd5ieH/8ydu0OwefVzAoa6', NULL, NULL, 'Natan Mekebib', '2023-09-07 21:52:13.984000'),
('fceeca18-a0f3-4ab4-9ade-06e4d109746c', 'nm@gmail.com', '$2a$10$hVZzmemnf20uWzMP0HWBxuQSFNhlJn6kgYzggpSi5T6woif5EQxbO', NULL, NULL, 'Natan Mekebib', '2023-09-13 02:51:37.284000');

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
