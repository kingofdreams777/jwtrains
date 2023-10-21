CREATE TABLE `trainarticles` (
	`number` text,
	`category` text,
	`description` text,
	`component` text,
	`last_updated` text,
	`filename` text,
	`image` text
);
--> statement-breakpoint
CREATE TABLE `traincomponents` (
	`number` text,
	`description` text,
	`gauge` text,
	`set` text,
	`image` text
);
--> statement-breakpoint
CREATE TABLE `trainsets` (
	`number` text,
	`year` integer,
	`gauge` text,
	`price` real,
	`description` text,
	`track` text,
	`transformer` text
);
--> statement-breakpoint
CREATE INDEX `number_idx` ON `trainarticles` (`number`);--> statement-breakpoint
CREATE INDEX `component_idx` ON `trainarticles` (`component`);--> statement-breakpoint
CREATE INDEX `number_idx` ON `traincomponents` (`number`);--> statement-breakpoint
CREATE INDEX `number_idx` ON `trainsets` (`number`);--> statement-breakpoint
CREATE INDEX `year_idx` ON `trainsets` (`year`);