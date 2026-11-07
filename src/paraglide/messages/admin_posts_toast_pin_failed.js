/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Posts_Toast_Pin_FailedInputs */

const zh_admin_posts_toast_pin_failed = /** @type {(inputs: Admin_Posts_Toast_Pin_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`置顶状态更新失败，请重试。`)
};

const en_admin_posts_toast_pin_failed = /** @type {(inputs: Admin_Posts_Toast_Pin_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't update the pin. Try again.`)
};

/**
* | output |
* | --- |
* | "Couldn't update the pin. Try again." |
*
* @param {Admin_Posts_Toast_Pin_FailedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const admin_posts_toast_pin_failed = /** @type {((inputs?: Admin_Posts_Toast_Pin_FailedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Posts_Toast_Pin_FailedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_admin_posts_toast_pin_failed(inputs)
	return zh_admin_posts_toast_pin_failed(inputs)
});