"use strict";

/**
 * Class holds various contants.
 */
class Const {

///////////////////////////////////////////////////////////////////////////////
// Constants used in XMLUtil class.
///////////////////////////////////////////////////////////////////////////////

    /**
     * Property name where attributes are stored.
     *
     * @type {string}
     */
    static get XML_ATTRIBUTES() {
        return "$";
    }

    /**
     * Property name where subelements are stored.
     *
     * @type {string}
     */
    static get XML_SUBELEMENTS() {
        return "$$";
    }

    /**
     * Property name where text is stored.
     *
     * @type {string}
     */
    static get XML_TEXT() {
        return "_";
    }

    /**
     * Property name for text value.
     *
     * @type {string}
     */
    static get XML_TEXT_VALUE() {
        return "__TEXT_VALUE__";
    }

}

module.exports = Const;
