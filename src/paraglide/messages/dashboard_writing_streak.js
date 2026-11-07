/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Dashboard_Writing_StreakInputs */

const zh_dashboard_writing_streak = /** @type {(inputs: Dashboard_Writing_StreakInputs) => LocalizedString} */ (i) => {
	const formattedCountZh = registry.number("zh", i?.count, {});
	const formattedCountEn = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`最长连续 ${formattedCountZh} 天`)
};

const en_dashboard_writing_streak = /** @type {(inputs: Dashboard_Writing_StreakInputs) => LocalizedString} */ (i) => {const formattedCountZh = registry.number("en", i?.count, {});
	const formattedCountEn = registry.number("en", i?.count, {});
	if ((i?.count === 1 || i?.count === "1")) return /** @type {LocalizedString} */ (`longest streak ${formattedCountEn} day`);
	return /** @type {LocalizedString} */ (`longest streak ${formattedCountEn} days`)
	
};

/**
* | count | output |
* | --- | --- |
* | "1" | "longest streak {formattedCountEn} day" |
* | * | "longest streak {formattedCountEn} days" |
*
* @param {Dashboard_Writing_StreakInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const dashboard_writing_streak = /** @type {((inputs: Dashboard_Writing_StreakInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Dashboard_Writing_StreakInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_dashboard_writing_streak(inputs)
	return zh_dashboard_writing_streak(inputs)
});