import "./table.css";
import { Space, Table, Tag } from "antd";
const { Column } = Table;

const TableC = ({ columns, data, actions }) => {



  return (
    <Table dataSource={data}  >
      {columns.map((column) => (
        <Column
          title={column.title}
          dataIndex={column.dataIndex}
          key={column.dataIndex}
        />        
      ))}
    {
      actions && (
        <Column          
          key="action" 
          //style={{ cursor: "pointer", display: 'flex', justifyContent: 'flex-end' }}
          render={(record) => (
            <span>{actions(record)}</span>
          )}         
        />
      )
    }
    </Table>
  );
};

export default TableC;
