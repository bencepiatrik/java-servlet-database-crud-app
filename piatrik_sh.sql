-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hostiteľ: 127.0.0.1
-- Čas generovania: Út 28.Feb 2023, 22:03
-- Verzia serveru: 10.4.14-MariaDB
-- Verzia PHP: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáza: `piatrik_sh`
--

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `skladba`
--

CREATE TABLE `skladba` (
  `id` int(11) NOT NULL,
  `nazov` varchar(255) NOT NULL,
  `album` varchar(255) NOT NULL,
  `dlzka` double NOT NULL,
  `interpret` varchar(255) NOT NULL,
  `hodnotenie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sťahujem dáta pre tabuľku `skladba`
--

INSERT INTO `skladba` (`id`, `nazov`, `album`, `dlzka`, `interpret`, `hodnotenie`) VALUES
(1, 'Thunderstruck', 'The Razors Edge', 4.52, 'lorem ipsum', 9),
(2, 'In da Club', 'Get Rich or Die Tryin', 3.13, 'dolor sit amet', 8),
(3, 'Summertime Sadness', 'Born to Die', 4.25, 'consectetur adipiscing', 7),
(4, 'novy4', '4', 4, '4', 4),
(5, 'testnazov2', 'asd', 2, 'testinterpret2', 2),
(6, 'testnazov3', 'testalbum3', 3, 'testinterpret3', 3);

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `tab3`
--

CREATE TABLE `tab3` (
  `nazov` varchar(45) NOT NULL,
  `nazov_zanru` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sťahujem dáta pre tabuľku `tab3`
--

INSERT INTO `tab3` (`nazov`, `nazov_zanru`) VALUES
('Thunderstruck', 'klasicky rock'),
('Summertime Sadness', 'pop'),
('In da Club', 'hip hop');

-- --------------------------------------------------------

--
-- Štruktúra tabuľky pre tabuľku `zanre`
--

CREATE TABLE `zanre` (
  `id` int(11) NOT NULL,
  `nazov_zanru` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Sťahujem dáta pre tabuľku `zanre`
--

INSERT INTO `zanre` (`id`, `nazov_zanru`) VALUES
(1, 'klasicky rock'),
(2, 'hip hop'),
(3, 'pop'),
(4, 'jazz'),
(5, 'blues'),
(6, 'country');

--
-- Kľúče pre exportované tabuľky
--

--
-- Indexy pre tabuľku `skladba`
--
ALTER TABLE `skladba`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pre tabuľku `zanre`
--
ALTER TABLE `zanre`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pre exportované tabuľky
--

--
-- AUTO_INCREMENT pre tabuľku `skladba`
--
ALTER TABLE `skladba`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=667;

--
-- AUTO_INCREMENT pre tabuľku `zanre`
--
ALTER TABLE `zanre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=670;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
