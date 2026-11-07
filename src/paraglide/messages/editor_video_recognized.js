/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ provider: NonNullable<unknown>, video: NonNullable<unknown> }} Editor_Video_RecognizedInputs */

const zh_editor_video_recognized = /** @type {(inputs: Editor_Video_RecognizedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已识别：${i?.provider} · ${i?.video}`)
};

const en_editor_video_recognized = /** @type {(inputs: Editor_Video_RecognizedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Found: ${i?.provider} · ${i?.video}`)
};

/**
* | output |
* | --- |
* | "Found: {provider} · {video}" |
*
* @param {Editor_Video_RecognizedInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_video_recognized = /** @type {((inputs: Editor_Video_RecognizedInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Video_RecognizedInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_video_recognized(inputs)
	return zh_editor_video_recognized(inputs)
});