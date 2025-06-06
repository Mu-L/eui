/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

// THIS IS A GENERATED FILE. DO NOT MODIFY MANUALLY. @see scripts/compile-icons.js

import * as React from 'react';
import type { SVGProps } from 'react';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const EuiIconTimeslider = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.5 3h1v2.5H11v1H7.5V3Z" />
    <path
      fillRule="evenodd"
      d="M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10Zm0-1a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
      clipRule="evenodd"
    />
    <path d="m15.207 13.5-2.353-2.354-.707.707L13.293 13H2.707l1.147-1.146-.708-.708L.793 13.5l2.353 2.354.708-.708L2.707 14h10.586l-1.146 1.146.707.707 2.353-2.353Z" />
  </svg>
);
export const icon = EuiIconTimeslider;
