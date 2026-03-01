-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 02, 2026 at 05:09 AM
-- Server version: 10.5.29-MariaDB
-- PHP Version: 8.4.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `diantar2_nasab`
--

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

CREATE TABLE `activity_logs` (
  `id` varchar(191) NOT NULL,
  `user_id` varchar(191) NOT NULL,
  `bani_id` varchar(191) DEFAULT NULL,
  `action` varchar(191) NOT NULL,
  `entity_type` varchar(191) NOT NULL,
  `entity_id` varchar(191) DEFAULT NULL,
  `old_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`old_values`)),
  `new_values` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`new_values`)),
  `description` text DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `user_id`, `bani_id`, `action`, `entity_type`, `entity_id`, `old_values`, `new_values`, `description`, `created_at`) VALUES
('091b6d29-52da-4617-a804-f00ea82ccc9e', '471f460f-1409-11f1-9b20-fa163ea4d8d9', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'CREATE', 'MEMBER', 'acc27f24-75b2-4905-80a5-36d78df69909', NULL, '{\"fullName\":\"Vivi Vironika\",\"gender\":\"FEMALE\",\"generation\":0}', 'Menambahkan anggota \"Vivi Vironika\"', '2026-03-01 05:07:02.468'),
('29509972-5e27-40b0-a2f9-9586f4e83e15', '471f460f-1409-11f1-9b20-fa163ea4d8d9', NULL, 'UPDATE', 'USER', '84a17169-cbb7-4538-b257-abeaa4a15d14', NULL, '{\"status\":\"APPROVED\",\"tierId\":\"471c6dbf-1409-11f1-9b20-fa163ea4d8d9\"}', 'Mengubah pengguna \"Nafila\"', '2026-03-01 11:25:22.985'),
('53448b6a-d997-4c7d-918f-4347424c67e7', '84a17169-cbb7-4538-b257-abeaa4a15d14', '532a0f69-e98e-44da-b586-77fc4264f0f9', 'CREATE', 'BANI', '532a0f69-e98e-44da-b586-77fc4264f0f9', NULL, NULL, 'Membuat bani \"Bani Surondriyo\"', '2026-03-01 11:28:13.808'),
('687f613f-f682-4c63-b659-1d8d5acd8db7', '471f460f-1409-11f1-9b20-fa163ea4d8d9', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'CREATE', 'MEMBER', 'e734c5a3-fd1c-4ba2-b34f-5cb330ed5611', NULL, '{\"fullName\":\"M. Zaenal Abidin\",\"gender\":\"MALE\",\"generation\":1}', 'Menambahkan anggota \"M. Zaenal Abidin\"', '2026-03-01 05:06:06.502'),
('694b3c00-02d9-4394-a47c-aff81e0c2d6d', '471f460f-1409-11f1-9b20-fa163ea4d8d9', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'CREATE', 'MEMBER', '1f8c5f83-1139-4e26-a4e3-e4f08f5ae2c6', NULL, '{\"fullName\":\"Ny Bahirotun Nikmah\",\"gender\":\"FEMALE\",\"generation\":0}', 'Menambahkan anggota \"Ny Bahirotun Nikmah\"', '2026-03-01 05:06:42.675'),
('abc9b867-3887-43b8-bf62-fb31c584744b', '471f460f-1409-11f1-9b20-fa163ea4d8d9', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'CREATE', 'MEMBER', 'd93e88c6-7f8c-422c-b8b0-652f180954fd', NULL, '{\"fullName\":\"Dewi Ihda Daniya Robbah\",\"gender\":\"MALE\",\"generation\":2}', 'Menambahkan anggota \"Dewi Ihda Daniya Robbah\"', '2026-03-01 05:07:20.558'),
('ac868a16-57bc-4af3-91ba-25efa1dabc1f', '471f460f-1409-11f1-9b20-fa163ea4d8d9', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'CREATE', 'MEMBER', 'd3aafb83-5e16-41b8-95f4-41f0fe6a4a84', NULL, '{\"fullName\":\"Ny Muawiyah\",\"gender\":\"FEMALE\",\"generation\":0}', 'Menambahkan anggota \"Ny Muawiyah\"', '2026-03-01 05:06:29.176'),
('f1a75ca0-19ea-46e2-84cf-77e91d286c65', '471f460f-1409-11f1-9b20-fa163ea4d8d9', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'CREATE', 'BANI', '26c3b6b5-719a-4ede-9398-3257e4eed963', NULL, NULL, 'Membuat bani \"Bani Adib Karomi\"', '2026-03-01 05:05:52.890'),
('fade8a3d-7aff-49cc-a931-89cb7417b981', '471f460f-1409-11f1-9b20-fa163ea4d8d9', NULL, 'UPDATE', 'USER', '84a17169-cbb7-4538-b257-abeaa4a15d14', NULL, '{\"tierId\":\"ebf189b3-c32c-4b84-857c-bb1641713c54\"}', 'Mengubah pengguna \"Nafila\"', '2026-03-01 11:26:34.157');

-- --------------------------------------------------------

--
-- Table structure for table `banis`
--

CREATE TABLE `banis` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `cover_image` varchar(191) DEFAULT NULL,
  `tree_orientation` enum('VERTICAL','HORIZONTAL') NOT NULL DEFAULT 'VERTICAL',
  `is_public` tinyint(1) NOT NULL DEFAULT 0,
  `show_wa_public` tinyint(1) NOT NULL DEFAULT 0,
  `show_birth_public` tinyint(1) NOT NULL DEFAULT 0,
  `show_address_public` tinyint(1) NOT NULL DEFAULT 0,
  `show_socmed_public` tinyint(1) NOT NULL DEFAULT 0,
  `created_by_id` varchar(191) NOT NULL,
  `root_member_id` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  `card_theme` enum('STANDARD','CLASSIC','GRADIENT','GLASS','DARK','NATURE') NOT NULL DEFAULT 'STANDARD'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `banis`
--

INSERT INTO `banis` (`id`, `name`, `description`, `cover_image`, `tree_orientation`, `is_public`, `show_wa_public`, `show_birth_public`, `show_address_public`, `show_socmed_public`, `created_by_id`, `root_member_id`, `created_at`, `updated_at`, `card_theme`) VALUES
('26c3b6b5-719a-4ede-9398-3257e4eed963', 'Bani Adib Karomi', '', NULL, 'HORIZONTAL', 1, 0, 0, 0, 0, '471f460f-1409-11f1-9b20-fa163ea4d8d9', 'ec925e84-a4e7-4d61-b9ae-e83faf7db042', '2026-03-01 05:05:52.008', '2026-03-01 11:16:38.696', 'STANDARD'),
('532a0f69-e98e-44da-b586-77fc4264f0f9', 'Bani Surondriyo', '', NULL, 'VERTICAL', 0, 0, 0, 0, 0, '84a17169-cbb7-4538-b257-abeaa4a15d14', '3d0b2caf-6ea8-4651-8b06-0bdaa92568f8', '2026-03-01 11:28:13.784', '2026-03-01 11:28:13.798', 'STANDARD');

-- --------------------------------------------------------

--
-- Table structure for table `bani_users`
--

CREATE TABLE `bani_users` (
  `id` varchar(191) NOT NULL,
  `bani_id` varchar(191) NOT NULL,
  `user_id` varchar(191) NOT NULL,
  `role` enum('ADMIN','EDITOR','VIEWER') NOT NULL DEFAULT 'EDITOR',
  `joined_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bani_users`
--

INSERT INTO `bani_users` (`id`, `bani_id`, `user_id`, `role`, `joined_at`) VALUES
('8aaeeeb6-53d2-4606-9f72-c256323db47d', '532a0f69-e98e-44da-b586-77fc4264f0f9', '84a17169-cbb7-4538-b257-abeaa4a15d14', 'ADMIN', '2026-03-01 11:28:13.803'),
('e0e74247-f4ba-4107-b178-e22553ac83c0', '26c3b6b5-719a-4ede-9398-3257e4eed963', '471f460f-1409-11f1-9b20-fa163ea4d8d9', 'ADMIN', '2026-03-01 05:05:52.257');

-- --------------------------------------------------------

--
-- Table structure for table `marriages`
--

CREATE TABLE `marriages` (
  `id` varchar(191) NOT NULL,
  `husband_id` varchar(191) NOT NULL,
  `wife_id` varchar(191) NOT NULL,
  `marriage_date` date DEFAULT NULL,
  `divorce_date` date DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `marriage_order` int(11) NOT NULL DEFAULT 1,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `marriages`
--

INSERT INTO `marriages` (`id`, `husband_id`, `wife_id`, `marriage_date`, `divorce_date`, `is_active`, `marriage_order`, `created_at`) VALUES
('462e2d19-7b04-4f25-a4da-9ae19270ea7a', 'ec925e84-a4e7-4d61-b9ae-e83faf7db042', '1f8c5f83-1139-4e26-a4e3-e4f08f5ae2c6', NULL, NULL, 1, 1, '2026-03-01 05:06:42.758'),
('623382bc-4e4d-4fbf-9961-118de799e87a', 'ec925e84-a4e7-4d61-b9ae-e83faf7db042', 'd3aafb83-5e16-41b8-95f4-41f0fe6a4a84', NULL, NULL, 1, 1, '2026-03-01 05:06:29.246'),
('98298c40-64a5-4096-8bb6-516a5da343ae', 'e734c5a3-fd1c-4ba2-b34f-5cb330ed5611', 'acc27f24-75b2-4905-80a5-36d78df69909', NULL, NULL, 1, 1, '2026-03-01 05:07:02.547');

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE `members` (
  `id` varchar(191) NOT NULL,
  `bani_id` varchar(191) NOT NULL,
  `full_name` varchar(191) NOT NULL,
  `nickname` varchar(191) DEFAULT NULL,
  `gender` enum('MALE','FEMALE') NOT NULL,
  `birth_date` date DEFAULT NULL,
  `birth_place` varchar(191) DEFAULT NULL,
  `death_date` date DEFAULT NULL,
  `is_alive` tinyint(1) NOT NULL DEFAULT 1,
  `address` varchar(191) DEFAULT NULL,
  `city` varchar(191) DEFAULT NULL,
  `phone_whatsapp` varchar(191) DEFAULT NULL,
  `social_media` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`social_media`)),
  `photo` varchar(191) DEFAULT NULL,
  `bio` text DEFAULT NULL,
  `father_id` varchar(191) DEFAULT NULL,
  `mother_id` varchar(191) DEFAULT NULL,
  `generation` int(11) NOT NULL DEFAULT 0,
  `added_by_id` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `bani_id`, `full_name`, `nickname`, `gender`, `birth_date`, `birth_place`, `death_date`, `is_alive`, `address`, `city`, `phone_whatsapp`, `social_media`, `photo`, `bio`, `father_id`, `mother_id`, `generation`, `added_by_id`, `created_at`, `updated_at`) VALUES
('1f8c5f83-1139-4e26-a4e3-e4f08f5ae2c6', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'Ny Bahirotun Nikmah', NULL, 'FEMALE', NULL, NULL, NULL, 1, NULL, NULL, NULL, '{}', NULL, NULL, NULL, NULL, 0, '471f460f-1409-11f1-9b20-fa163ea4d8d9', '2026-03-01 05:06:42.620', '2026-03-01 05:06:42.620'),
('3d0b2caf-6ea8-4651-8b06-0bdaa92568f8', '532a0f69-e98e-44da-b586-77fc4264f0f9', 'Surondriyo', NULL, 'MALE', NULL, NULL, NULL, 1, NULL, NULL, NULL, '{}', NULL, NULL, NULL, NULL, 0, '84a17169-cbb7-4538-b257-abeaa4a15d14', '2026-03-01 11:28:13.792', '2026-03-01 11:28:13.792'),
('acc27f24-75b2-4905-80a5-36d78df69909', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'Vivi Vironika', NULL, 'FEMALE', NULL, NULL, NULL, 1, NULL, NULL, NULL, '{}', NULL, NULL, NULL, NULL, 0, '471f460f-1409-11f1-9b20-fa163ea4d8d9', '2026-03-01 05:07:02.446', '2026-03-01 05:07:02.446'),
('d3aafb83-5e16-41b8-95f4-41f0fe6a4a84', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'Ny Muawiyah', NULL, 'FEMALE', NULL, NULL, NULL, 0, NULL, NULL, NULL, '{}', NULL, NULL, NULL, NULL, 0, '471f460f-1409-11f1-9b20-fa163ea4d8d9', '2026-03-01 05:06:29.157', '2026-03-01 05:06:29.157'),
('d93e88c6-7f8c-422c-b8b0-652f180954fd', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'Dewi Ihda Daniya Robbah', 'Daniya', 'MALE', NULL, NULL, NULL, 1, NULL, NULL, NULL, '{}', NULL, NULL, 'e734c5a3-fd1c-4ba2-b34f-5cb330ed5611', 'acc27f24-75b2-4905-80a5-36d78df69909', 2, '471f460f-1409-11f1-9b20-fa163ea4d8d9', '2026-03-01 05:07:20.402', '2026-03-01 05:07:20.402'),
('e734c5a3-fd1c-4ba2-b34f-5cb330ed5611', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'M. Zaenal Abidin', 'Bidin', 'MALE', NULL, NULL, NULL, 1, NULL, NULL, NULL, '{}', NULL, NULL, 'ec925e84-a4e7-4d61-b9ae-e83faf7db042', NULL, 1, '471f460f-1409-11f1-9b20-fa163ea4d8d9', '2026-03-01 05:06:06.479', '2026-03-01 05:06:06.479'),
('ec925e84-a4e7-4d61-b9ae-e83faf7db042', '26c3b6b5-719a-4ede-9398-3257e4eed963', 'KH. Adib Karomi', NULL, 'MALE', NULL, NULL, NULL, 1, NULL, NULL, NULL, '{}', NULL, NULL, NULL, NULL, 0, '471f460f-1409-11f1-9b20-fa163ea4d8d9', '2026-03-01 05:05:52.157', '2026-03-01 05:05:52.157');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `password` varchar(191) NOT NULL,
  `role` enum('SUPER_ADMIN','ADMIN','USER') NOT NULL DEFAULT 'USER',
  `status` enum('PENDING','APPROVED','SUSPENDED') NOT NULL DEFAULT 'PENDING',
  `avatar` varchar(191) DEFAULT NULL,
  `tier_id` varchar(191) DEFAULT NULL,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `role`, `status`, `avatar`, `tier_id`, `created_at`, `updated_at`) VALUES
('471f460f-1409-11f1-9b20-fa163ea4d8d9', 'Admin Nasab', 'admin@jejaknasab.com', '$2b$12$8u6gZPVcH0oYrtn13rCXKucfilEiJHmF7TNulRKcmd3k/z8s6sdDa', 'SUPER_ADMIN', 'APPROVED', NULL, NULL, '2026-02-28 01:22:29.000', '2026-02-28 01:22:29.000'),
('84a17169-cbb7-4538-b257-abeaa4a15d14', 'Nafila', 'nanafila0508@gmail.com', '$2b$12$IdAAMsUFiuXQIN/2dWGaXuIK2IXNBH7u1H4/TqAv68ObBe9SLsoPC', 'USER', 'APPROVED', NULL, 'ebf189b3-c32c-4b84-857c-bb1641713c54', '2026-03-01 11:24:51.207', '2026-03-01 11:26:34.139');

-- --------------------------------------------------------

--
-- Table structure for table `user_tiers`
--

CREATE TABLE `user_tiers` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `color` varchar(191) NOT NULL DEFAULT '#6B7280',
  `max_banis` int(11) NOT NULL DEFAULT 1,
  `max_generations` int(11) NOT NULL DEFAULT 10,
  `can_generate_pdf` tinyint(1) NOT NULL DEFAULT 0,
  `can_generate_image` tinyint(1) NOT NULL DEFAULT 0,
  `is_default` tinyint(1) NOT NULL DEFAULT 0,
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_tiers`
--

INSERT INTO `user_tiers` (`id`, `name`, `color`, `max_banis`, `max_generations`, `can_generate_pdf`, `can_generate_image`, `is_default`, `created_at`) VALUES
('471c6dbf-1409-11f1-9b20-fa163ea4d8d9', 'Free', '#6B7280', 1, 10, 0, 0, 1, '2026-02-28 01:22:29.000'),
('a2e23d53-70c2-48bf-b165-f04c88b5a204', 'Silver', '#d6d6d6', 3, 10, 1, 1, 0, '2026-03-01 11:25:55.216'),
('ebf189b3-c32c-4b84-857c-bb1641713c54', 'Gold', '#F59E0B', 10, 10, 1, 1, 0, '2026-03-01 11:26:10.207');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activity_logs_bani_id_idx` (`bani_id`),
  ADD KEY `activity_logs_user_id_idx` (`user_id`),
  ADD KEY `activity_logs_created_at_idx` (`created_at`);

--
-- Indexes for table `banis`
--
ALTER TABLE `banis`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `banis_root_member_id_key` (`root_member_id`),
  ADD KEY `banis_created_by_id_fkey` (`created_by_id`);

--
-- Indexes for table `bani_users`
--
ALTER TABLE `bani_users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `bani_users_bani_id_user_id_key` (`bani_id`,`user_id`),
  ADD KEY `bani_users_user_id_fkey` (`user_id`);

--
-- Indexes for table `marriages`
--
ALTER TABLE `marriages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `marriages_husband_id_fkey` (`husband_id`),
  ADD KEY `marriages_wife_id_fkey` (`wife_id`);

--
-- Indexes for table `members`
--
ALTER TABLE `members`
  ADD PRIMARY KEY (`id`),
  ADD KEY `members_bani_id_idx` (`bani_id`),
  ADD KEY `members_father_id_idx` (`father_id`),
  ADD KEY `members_mother_id_idx` (`mother_id`),
  ADD KEY `members_added_by_id_fkey` (`added_by_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_key` (`email`),
  ADD KEY `users_tier_id_fkey` (`tier_id`);

--
-- Indexes for table `user_tiers`
--
ALTER TABLE `user_tiers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_tiers_name_key` (`name`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_bani_id_fkey` FOREIGN KEY (`bani_id`) REFERENCES `banis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `activity_logs_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `banis`
--
ALTER TABLE `banis`
  ADD CONSTRAINT `banis_created_by_id_fkey` FOREIGN KEY (`created_by_id`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `banis_root_member_id_fkey` FOREIGN KEY (`root_member_id`) REFERENCES `members` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `bani_users`
--
ALTER TABLE `bani_users`
  ADD CONSTRAINT `bani_users_bani_id_fkey` FOREIGN KEY (`bani_id`) REFERENCES `banis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bani_users_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `marriages`
--
ALTER TABLE `marriages`
  ADD CONSTRAINT `marriages_husband_id_fkey` FOREIGN KEY (`husband_id`) REFERENCES `members` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `marriages_wife_id_fkey` FOREIGN KEY (`wife_id`) REFERENCES `members` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `members`
--
ALTER TABLE `members`
  ADD CONSTRAINT `members_added_by_id_fkey` FOREIGN KEY (`added_by_id`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `members_bani_id_fkey` FOREIGN KEY (`bani_id`) REFERENCES `banis` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `members_father_id_fkey` FOREIGN KEY (`father_id`) REFERENCES `members` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `members_mother_id_fkey` FOREIGN KEY (`mother_id`) REFERENCES `members` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_tier_id_fkey` FOREIGN KEY (`tier_id`) REFERENCES `user_tiers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
