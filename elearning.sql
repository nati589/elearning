-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 31, 2023 at 10:31 AM
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
  `book_thumbnail` varchar(5000) DEFAULT NULL,
  `book_purchases` int(100) NOT NULL,
  `book_price` float DEFAULT NULL,
  `book_rating` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `book`
--

INSERT INTO `book` (`book_id`, `book_title`, `book_details`, `book_author`, `book_thumbnail`, `book_purchases`, `book_price`, `book_rating`) VALUES
('a243a1fd-4669-11ee-b427-0a002700000a', 'ffg', 'dsfd', 'dfsd', 'dfds', 2, 1.23, NULL);

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
  `course_students` varchar(1000) NOT NULL,
  `course_rating` varchar(100) DEFAULT NULL,
  `course_sections` int(10) NOT NULL,
  `course_archived` tinyint(1) DEFAULT NULL,
  `course_price` double NOT NULL,
  `course_instructor` varchar(100) DEFAULT NULL,
  `course_thumbnail` varchar(2000) DEFAULT NULL,
  `course_max_comments` int(100) NOT NULL DEFAULT 5,
  `course_total_hour` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
  `user_joined` datetime(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `web_content`
--

CREATE TABLE `web_content` (
  `web_content_id` varchar(36) NOT NULL,
  `web_content_goal_title` varchar(1000) DEFAULT NULL,
  `web_content_hero_title` varchar(1000) DEFAULT NULL,
  `web_content_goal_detail` varchar(2000) DEFAULT NULL,
  `web_content_hero_detail` varchar(2000) DEFAULT NULL,
  `web_content_lesson_title` varchar(1000) DEFAULT NULL,
  `web_content_lesson_detail` varchar(2000) DEFAULT NULL,
  `web_content_action_title` varchar(1000) DEFAULT NULL,
  `web_content_action_detail` varchar(2000) DEFAULT NULL,
  `web_content_mentor_title` varchar(1000) DEFAULT NULL,
  `web_content_mentor_detail` varchar(2000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
