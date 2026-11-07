/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Unsubscribe_Failed_DescInputs */

const zh_unsubscribe_failed_desc = /** @type {(inputs: Unsubscribe_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退订请求失败，链接可能已过期或签名无效，请稍后重试。`)
};

const en_unsubscribe_failed_desc = /** @type {(inputs: Unsubscribe_Failed_DescInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsubscribe request failed. The link may have expired or is invalid. Please try again later.`)
};

/**
* | output |
* | --- |
* | "Unsubscribe request failed. The link may have expired or is invalid. Please try again later." |
*
* @param {Unsubscribe_Failed_DescInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const unsubscribe_failed_desc = /** @type {((inputs?: Unsubscribe_Failed_DescInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Failed_DescInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_unsubscribe_failed_desc(inputs)
	return zh_unsubscribe_failed_desc(inputs)
});