-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 19, 2020 at 12:34 PM
-- Server version: 5.7.24
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `codemymobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `friends`
--

DROP TABLE IF EXISTS `friends`;
CREATE TABLE IF NOT EXISTS `friends` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `sender` int(20) NOT NULL,
  `receiver` int(20) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `friends`
--

INSERT INTO `friends` (`id`, `sender`, `receiver`, `status`, `created_at`, `updated_at`) VALUES
(2, 6, 2, 1, '2020-10-19 09:50:43', '2020-10-19 09:50:43'),
(3, 2, 7, 1, '2020-10-19 09:50:43', '2020-10-19 09:50:43'),
(4, 2, 10, 1, '2020-10-19 09:50:43', '2020-10-19 09:50:43'),
(5, 11, 3, 1, '2020-10-19 09:50:43', '2020-10-19 09:50:43'),
(6, 10, 1, 1, '2020-10-19 09:50:43', '2020-10-19 09:50:43'),
(7, 7, 4, 1, '2020-10-19 09:50:43', '2020-10-19 09:50:43'),
(8, 7, 5, 1, '2020-10-19 09:50:43', '2020-10-19 09:50:43');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `status` int(1) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstName`, `lastName`, `avatar`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Partha', 'Biswas', 'https://randomuser.me/api/portraits/men/85.jpg', 1, '2020-10-19 09:01:00', '2020-10-19 09:01:00'),
(2, 'aman', 'Dey', 'https://randomuser.me/api/portraits/men/62.jpg', 1, '2020-10-19 09:08:38', '2020-10-19 09:08:38'),
(3, 'Dipan', 'Dey', 'https://randomuser.me/api/portraits/men/61.jpg', 1, '2020-10-19 09:08:38', '2020-10-19 09:08:38'),
(4, 'Nman', 'Das', 'https://randomuser.me/api/portraits/men/52.jpg', 1, '2020-10-19 09:08:38', '2020-10-19 09:08:38'),
(5, 'Prashad', 'Poddar', 'https://randomuser.me/api/portraits/men/55.jpg', 1, '2020-10-19 09:08:38', '2020-10-19 09:08:38'),
(6, 'Bimal', 'Pipewala', 'https://randomuser.me/api/portraits/men/32.jpg', 1, '2020-10-19 09:11:02', '2020-10-19 09:11:02'),
(7, 'Akash', 'Dey', 'https://randomuser.me/api/portraits/men/81.jpg', 1, '2020-10-19 09:11:02', '2020-10-19 09:11:02'),
(8, 'Swapnil', 'Das', 'https://randomuser.me/api/portraits/men/22.jpg', 1, '2020-10-19 09:11:02', '2020-10-19 09:11:02'),
(9, 'Prashant', 'Poddar', 'https://randomuser.me/api/portraits/men/35.jpg', 1, '2020-10-19 09:11:02', '2020-10-19 09:11:02'),
(10, 'Akshay', 'Pipewala', 'https://randomuser.me/api/portraits/men/31.jpg', 1, '2020-10-19 09:11:02', '2020-10-19 09:11:02'),
(11, 'Raj', 'Dey', 'https://randomuser.me/api/portraits/men/45.jpg', 1, '2020-10-19 09:11:02', '2020-10-19 09:11:02'),
(12, 'Sapan', 'Das', 'https://randomuser.me/api/portraits/men/74.jpg', 1, '2020-10-19 09:11:02', '2020-10-19 09:11:02'),
(13, 'Bishop', 'Poddar', 'https://randomuser.me/api/portraits/men/25.jpg', 1, '2020-10-19 09:11:02', '2020-10-19 09:11:02');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
