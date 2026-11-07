/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Editor_Action_Publish_Future_DateInputs */

const zh_editor_action_publish_future_date = /** @type {(inputs: Editor_Action_Publish_Future_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布日期晚于当前时间，需改为当前或更早的时间后再发布。`)
};

const en_editor_action_publish_future_date = /** @type {(inputs: Editor_Action_Publish_Future_DateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The publication date is later than now. Change it to now or earlier, then publish.`)
};

/**
* | output |
* | --- |
* | "The publication date is later than now. Change it to now or earlier, then publish." |
*
* @param {Editor_Action_Publish_Future_DateInputs} inputs
* @param {{ locale?: "zh" | "en" }} options
* @returns {LocalizedString}
*/
export const editor_action_publish_future_date = /** @type {((inputs?: Editor_Action_Publish_Future_DateInputs, options?: { locale?: "zh" | "en" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Editor_Action_Publish_Future_DateInputs, { locale?: "zh" | "en" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_editor_action_publish_future_date(inputs)
	return zh_editor_action_publish_future_date(inputs)
});