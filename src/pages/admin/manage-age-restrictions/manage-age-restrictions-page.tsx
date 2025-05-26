import useAgeRestrictionStore from "@/store/use-age-restriction-store";
import { AgeRestriction } from "@/types/age-restriction";
import {
  Button,
  Input,
  InputRef,
  Space,
  Table,
  TableColumnType,
  TableProps,
} from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import { useEffect, useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import { CiEdit } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import AddAgeRestrictionModal from "./add-age-restriction";
import EditAgeRestrictionModal from "./edit-age-restriction";
import DeleteAgeRestrictionModal from "./delete-age-restriction";

type DataIndex = keyof AgeRestriction;
const ManageAgeRestrictionPage = () => {
  const searchInput = useRef<InputRef>(null);
  const { loading, fetchAgeRestrictions, ageRestrictions } =
    useAgeRestrictionStore();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<AgeRestriction | null>(
    null
  );
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const handleEdit = (record: AgeRestriction) => {
    setSelectedRecord(record);
    setEditModalOpen(true);
  };

  const handleDelete = (record: AgeRestriction) => {
    setSelectedRecord(record);
    setDeleteModalOpen(true);
  };

  const handleRefresh = () => {
    fetchAgeRestrictions();
  };

  const handleSearch = (
    selectedKeys: string[],
    confirm: FilterDropdownProps["confirm"],
    dataIndex: DataIndex
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText("");
  };

  const getColumnSearchProps = (
    dataIndex: DataIndex
  ): TableColumnType<AgeRestriction> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            icon={<FaSearch />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <FaSearch
        style={{ color: filtered ? "#FF6600" : undefined }}
        className="w-5"
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    filterDropdownProps: {
      onOpenChange(open) {
        if (open) {
          setTimeout(() => searchInput.current?.select(), 100);
        }
      },
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const columns: TableProps<AgeRestriction>["columns"] = [
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
      sorter: (a, b) => a.code.localeCompare(b.code),
      ...getColumnSearchProps("code"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      sorter: (a, b) => a.code.localeCompare(b.code),
      ...getColumnSearchProps("description"),
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_, record) => (
        <Space size="small">
          <Button shape="circle" onClick={() => handleEdit(record)}>
            <CiEdit />
          </Button>
          <Button shape="circle" onClick={() => handleDelete(record)} danger>
            <MdOutlineDeleteForever />
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchAgeRestrictions();
  }, []);

  return (
    <div className="px-5">
      <div className="mb-3 flex justify-between py-3">
        <h1 className="text-3xl font-bold mb-5">Manage Age Restrictions</h1>
        <Button type="primary" onClick={() => setAddModalOpen(true)}>
          Add Age Restsrictions
        </Button>
      </div>
      <div className="">
        <Table<AgeRestriction>
          columns={columns}
          dataSource={ageRestrictions}
          loading={loading}
          bordered
          rowKey={(x) => x.code}
        />
      </div>

      <AddAgeRestrictionModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSuccess={handleRefresh}
      />

      <EditAgeRestrictionModal
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedRecord(null);
        }}
        onSuccess={handleRefresh}
        record={selectedRecord}
      />

      <DeleteAgeRestrictionModal
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedRecord(null);
        }}
        onSuccess={handleRefresh}
        record={selectedRecord}
      />
    </div>
  );
};

export default ManageAgeRestrictionPage;
