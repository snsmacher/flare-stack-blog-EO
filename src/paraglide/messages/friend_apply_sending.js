/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Friend_Apply_SendingInputs */

const zh_friend_apply_sending = /** @type {(inputs: Friend_Apply_SendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在提交…`)
};

const en_friend_apply_sending = /** @type {(inputs: Friend_Apply_SendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submitting…`)
};

/**
* | output |
* | --- |
* | "Submitting…" |
*
* @param {Friend_Apply_SendingInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const friend_apply_sending = /** @type {((inputs?: Friend_Apply_SendingInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Friend_Apply_SendingInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_friend_apply_sending(inputs)
	return zh_friend_apply_sending(inputs)
});