import { Language } from "@/types/language";
import { Button, Input, InputRef, Space, Table, TableColumnType, TableProps } from "antd";
import { useEffect, useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import AddLanguageModal from "./add-language";
import EditLanguageModal from "./edit-language";
import DeleteLanguageModal from "./delete-language";
import useLanguageStore from "@/store/use-language-store";
import { FilterDropdownProps } from "antd/es/table/interface";
import { FaSearch } from "react-icons/fa";
import Highlighter from "react-highlight-words";

type DataIndex = keyof Language;

const ManageLanguages = () => {
  const searchInput = useRef<InputRef>(null);
  const { fetchLanguages, loading, languages } = useLanguageStore();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(
    null
  );
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");


  const handleEdit = (record: Language) => {
    setSelectedLanguage(record);
    setEditModalOpen(true);
  };

  const handleDelete = (record: Language) => {
    setSelectedLanguage(record);
    setDeleteModalOpen(true);
  };

  const handleRefresh = () => {
    fetchLanguages();
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
  ): TableColumnType<Language> => ({
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
      <FaSearch style={{ color: filtered ? "#FF6600" : undefined }} className="w-5"/>
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


  const columns: TableProps<Language>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      ...getColumnSearchProps("name"),
    },
    {
      title: "Action",
      key: "action",
      width: 100,
      render: (_, record) => (
        <Space size="small">
          <Button
            type="default"
            shape={"circle"}
            onClick={() => handleEdit(record)}
          >
            <CiEdit />
          </Button>
          <Button
            type="default"
            shape={"circle"}
            danger
            onClick={() => handleDelete(record)}
          >
            <MdOutlineDeleteForever />
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchLanguages();
  }, []);

  return (
    <div className="px-5">
      <div className="mb-3">
        <div className="flex justify-between py-3">
          <h1 className="text-3xl font-bold mb-5">Manage Languages</h1>
          <Button type="primary" onClick={() => setAddModalOpen(true)}>
            Add New Languages
          </Button>
        </div>

        <Table<Language>
          columns={columns}
          dataSource={languages}
          loading={loading}
          bordered
          rowKey={(x) => x.id}
        />
      </div>

      <AddLanguageModal
        open={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onSuccess={handleRefresh}
      />

      <EditLanguageModal
        open={editModalOpen}
        onClose={() => {
          setEditModalOpen(false);
          setSelectedLanguage(null);
        }}
        onSuccess={handleRefresh}
        language={selectedLanguage}
      />

      <DeleteLanguageModal
        open={deleteModalOpen}
        onClose={() => {
          setDeleteModalOpen(false);
          setSelectedLanguage(null);
        }}
        onSuccess={handleRefresh}
        language={selectedLanguage}
      />
    </div>
  );
};

export default ManageLanguages;
