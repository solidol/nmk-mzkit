<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'u654970678_yqeqy');

/** MySQL database username */
define('DB_USER', 'u654970678_yraru');

/** MySQL database password */
define('DB_PASSWORD', 'ybuDateHaD');

/** MySQL hostname */
define('DB_HOST', 'mysql.main-hosting.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '/V!J}TzFX~-z 5]`gN{`qaMbRV[PU.{EOmi=GG`>mS-n`L?AG0`;@5_6l?9DKStK');
define('SECURE_AUTH_KEY',  'L fx-!?}$7rz*R7{>vl]L#Vwh+k{/We47!Ybs%Ei$;V]pvQ}#OWd$JfuDiR(l~CV');
define('LOGGED_IN_KEY',    '?90@@>[f*e,HV1t+-MncNmM6Q>__KI2I[=>dALb80Da#hc D.0<w5&ggvV}jMK]m');
define('NONCE_KEY',        's|P:&vKIRaqs`XEGiE:/x@.Ne2b[t^hdU%v<8xCiKFP1_&Wq-R>*Ol lJz>iYeG<');
define('AUTH_SALT',        'i~igvL7KDhOV}lFCC*~g)d10@QAd(y=J>POoN}P+o},]kW&?7Mwm_pg[~1daujn)');
define('SECURE_AUTH_SALT', 'cZ+C;=.W;e[E@m@%96<#{ B(AxSSJ*R++`j^25 ^>cK`sAiBxkR7lD,:*OOm9w#X');
define('LOGGED_IN_SALT',   'Zl<A)z6x{H*k73M5$zK[>?0ruP9!.+2EiFY5Z&%U8*yXGm$ *6Yu(-^wuMcHjU L');
define('NONCE_SALT',       '1/6[iuoFFGO;Uk`|*7D0U9zfxQ.VK6iu.5or.WVuV7zZjs0zJe<Qh_q8*:Og/A3U');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', 'ru_RU');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
