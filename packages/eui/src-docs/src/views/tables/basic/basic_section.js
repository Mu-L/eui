import React from 'react';
import { GuideSectionTypes } from '../../../components';
import { EuiCode } from '../../../../../src/components';
import Table from './basic';
import { EuiBasicTable } from '../../../../../src/components/basic_table';
import {
  Criteria,
  CriteriaWithPagination,
} from '!!prop-loader!../../../../../src/components/basic_table/basic_table';
import { Pagination } from '../paginated/_props';
import {
  EuiTableFieldDataColumnType,
  EuiTableSelectionType,
  EuiTableSortingType,
} from '!!prop-loader!../../../../../src/components/basic_table/table_types';
import { CustomItemAction } from '!!prop-loader!../../../../../src/components/basic_table/action_types';
import {
  EuiTableComputedColumnType,
  EuiTableActionsColumnType,
  DefaultItemActionProps as DefaultItemAction,
} from '../props/props';

const source = require('!!raw-loader!./basic');

export const section = {
  title: 'A basic table',
  source: [
    {
      type: GuideSectionTypes.TSX,
      code: source,
    },
  ],
  text: (
    <>
      <p>
        <strong>EuiBasicTable</strong> is an opinionated high level component
        that standardizes both display and injection. At its most simple it only
        accepts two properties:
      </p>
      <ul>
        <li>
          <EuiCode>items</EuiCode> are an array of objects that should be
          displayed in the table; one item per row. The exact item data that
          will be rendered in each cell in these rows is determined by the{' '}
          <EuiCode>columns</EuiCode> property. You can define{' '}
          <EuiCode>rowProps</EuiCode> and <EuiCode>cellProps</EuiCode> props
          which can either be objects or functions that return objects. The
          returned objects will be applied as props to the rendered rows and row
          cells, respectively.
        </li>
        <li>
          <EuiCode>columns</EuiCode> defines what columns the table has and how
          to extract item data to display each cell in each row.
        </li>
      </ul>
      <p>
        This example shows the most basic form of the{' '}
        <strong>EuiBasicTable</strong>. It is configured with the required{' '}
        <EuiCode>items</EuiCode> and <EuiCode>columns</EuiCode> properties. It
        shows how each column defines the data it needs to display per item.
        Some columns display the value as is (e.g. <EuiCode>firstName</EuiCode>{' '}
        and <EuiCode>lastName</EuiCode> fields for the user column). Other
        columns customize the display of the data before it is injected. This
        customization can be done in two (non-mutual exclusive) ways:
      </p>
      <ul>
        <li>
          Provide a hint about the type of data (e.g. the &quot;Date of
          Birth&quot; column indicates that the data it shows is of type{' '}
          <EuiCode>date</EuiCode>). Providing data type hints will cause
          built-in display components to be adjusted (e.g. numbers will become
          right aligned, just like Excel).
        </li>
        <li>
          Provide a <EuiCode>render</EuiCode> function that given the value (and
          the item as a second argument) returns the React node that should be
          displayed as the content of the cell. This can be as simple as
          formatting values (e.g. the &quot;Date of Birth&quot; column) to
          utilizing more complex React components (e.g. the &quot;Online&quot;,
          &quot;Github&quot;, and &quot;Nationality&quot; columns as seen
          below).
          <br />
          <strong>Note:</strong> the basic table will treat any cells that use a{' '}
          <EuiCode>render</EuiCode> function as being{' '}
          <EuiCode language="js">textOnly: false</EuiCode>. This may cause
          unnecessary word breaks. Apply{' '}
          <EuiCode language="js">textOnly: true</EuiCode> to ensure it breaks
          properly.
        </li>
      </ul>
      <p>
        If a column name needs a longer description, an icon with a tooltip can
        be used. This can be done using the{' '}
        <EuiCode language="js">columns.nameTooltip</EuiCode> property (e.g. the
        "GitHub" column as seen below). This approach ensures that the icon
        remains visible even if the text gets truncated, unlike manually using a
        React node for <EuiCode language="js">columns.name</EuiCode>.
      </p>
    </>
  ),
  props: {
    EuiBasicTable,
    Criteria,
    CriteriaWithPagination,
    Pagination,
    EuiTableSortingType,
    EuiTableSelectionType,
    EuiTableFieldDataColumnType,
    EuiTableComputedColumnType,
    EuiTableActionsColumnType,
    DefaultItemAction,
    CustomItemAction,
  },
  demo: <Table />,
};
