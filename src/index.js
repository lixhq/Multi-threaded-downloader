/**
 * Created by tushar.mathur on 21/01/16.
 */

'use strict'

import * as ob from './Transformers'
import Mtd from './mtd'

exports.createDownload = (options) => new Mtd(ob, options)
