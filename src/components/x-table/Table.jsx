import { Table } from "ant-design-vue";
import renderer from "./renderer";

const XtepTable = defineComponent({
  name: "XTable",
  setup(props) {
    console.log("props: ", props);

    const bodyCellRenderer = ({ column, record }) => {
      const render = renderer[column.valueType];

      if (render) {
        console.log("render: ", render);
        return render(record.id);
      }
    };

    return () => {
      return h(
        Table,
        { column: props.columns },
        {
          bodyCell: bodyCellRenderer,
        }
      );
    };

    // return () => {
    //   return (
    //     <Table columns={props.columns}>
    //       {{
    //         default: () => "default slot",
    //         bodyCell: () => <div>foo</div>,
    //         bar: () => [<span>one</span>, <span>two</span>],
    //       }}
    //     </Table>
    //   );
    // };
  },
});

export default XtepTable;
