/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Dashboard_Hero_ContinueInputs */

const zh_dashboard_hero_continue = /** @type {(inputs: Dashboard_Hero_ContinueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`继续写《${i?.title}》`)
};

const en_dashboard_hero_continue = /** @type {(inputs: Dashboard_Hero_ContinueInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Continue “${i?.title}”`)
};

/**
* | output |
* | --- |
* | "Continue “{title}”" |
*
* @param {Dashboard_Hero_ContinueInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_hero_continue = /** @type {((inputs: Dashboard_Hero_ContinueInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Hero_ContinueInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_hero_continue(inputs)
	return zh_dashboard_hero_continue(inputs)
});