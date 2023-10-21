CREATE TABLE `libsql_wasm_func_table` (
	`name` text PRIMARY KEY NOT NULL,
	`body` text
);
--> statement-breakpoint
DROP INDEX IF EXISTS `number_idx`;--> statement-breakpoint
DROP INDEX IF EXISTS `component_idx`;--> statement-breakpoint
DROP INDEX IF EXISTS `year_idx`;--> statement-breakpoint
CREATE INDEX `trainarticles_index` ON `trainarticles` (`number`);--> statement-breakpoint
CREATE INDEX `traincomponents_set_number` ON `traincomponents` (`set`);--> statement-breakpoint
CREATE INDEX `traincomponents_number` ON `traincomponents` (`number`);--> statement-breakpoint
CREATE INDEX `trainsets_number` ON `trainsets` (`number`);