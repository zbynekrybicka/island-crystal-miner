--
-- Struktura tabulky `mining`
--

CREATE TABLE `mining` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `begin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabulky `mining_actions`
--

CREATE TABLE `mining_actions` (
  `id` int(10) UNSIGNED NOT NULL,
  `mining_id` int(10) UNSIGNED NOT NULL,
  `machine_id` int(10) UNSIGNED NOT NULL,
  `action_time` datetime NOT NULL,
  `result` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabulky `mining_machines`
--

CREATE TABLE `mining_machines` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `title` char(255) CHARACTER SET utf8 NOT NULL,
  `type` enum('miningMachine','energySource') NOT NULL,
  `action_per_click` int(10) UNSIGNED NOT NULL,
  `seconds_per_click` int(10) UNSIGNED NOT NULL,
  `amortization_per_click` int(10) UNSIGNED NOT NULL,
  `amortization` int(10) UNSIGNED NOT NULL,
  `original_price` int(10) UNSIGNED NOT NULL,
  `selected` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Vypisuji data pro tabulku `mining_machines`
--

INSERT INTO `mining_machines` (`id`, `user_id`, `title`, `type`, `action_per_click`, `seconds_per_click`, `amortization_per_click`, `amortization`, `original_price`, `selected`) VALUES
(1, NULL, 'Elektrická zbíječka', 'miningMachine', 1, 1, 1, 0, 10, 0);

-- --------------------------------------------------------

--
-- Struktura tabulky `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` char(255) CHARACTER SET utf8 NOT NULL,
  `email` char(255) CHARACTER SET utf8 NOT NULL,
  `password` char(64) CHARACTER SET utf8 DEFAULT NULL,
  `crystals` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Vypisuji data pro tabulku `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `crystals`) VALUES
(1, 'Zbyněk Rybička', 'zbynek.rybicka@gmail.com', '$2a$12$B2b/uKLP.sGT8QMiQpjHD.ZvyE4LxbjQiFcjCkc5g4XiWli9HtiW.', 0);

--
-- Indexy pro exportované tabulky
--

--
-- Indexy pro tabulku `mining`
--
ALTER TABLE `mining`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `mining_actions`
--
ALTER TABLE `mining_actions`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `mining_machines`
--
ALTER TABLE `mining_machines`
  ADD PRIMARY KEY (`id`);

--
-- Indexy pro tabulku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`email`);
