import { sqliteTable, AnySQLiteColumn, text, index, integer, real } from "drizzle-orm/sqlite-core"
import { sql } from "drizzle-orm"


export const libsqlWasmFuncTable = sqliteTable("libsql_wasm_func_table", {
	name: text("name").primaryKey().notNull(),
	body: text("body"),
});

export const trainsets = sqliteTable("trainsets", {
	number: text("number"),
	year: integer("year"),
	gauge: text("gauge"),
	price: real("price"),
	description: text("description"),
	track: text("track"),
	transformer: text("transformer"),
},
(table) => {
	return {
		number: index("trainsets_number").on(table.number),
	}
});

export const traincomponents = sqliteTable("traincomponents", {
	number: text("number"),
	description: text("description"),
	gauge: text("gauge"),
	set: text("set"),
	image: text("image"),
},
(table) => {
	return {
		setNumber: index("traincomponents_set_number").on(table.set),
		number: index("traincomponents_number").on(table.number),
	}
});

export const trainarticles = sqliteTable("trainarticles", {
	number: text("number"),
	category: text("category"),
	description: text("description"),
	component: text("component"),
	lastUpdated: text("last_updated"),
	filename: text("filename"),
	image: text("image"),
},
(table) => {
	return {
		componentIdx: index().on(table.component),
		index: index("trainarticles_index").on(table.number),
	}
});