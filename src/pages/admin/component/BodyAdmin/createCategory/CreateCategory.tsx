import React, { useState } from 'react'
import './CategoryCreate.scss'
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/stores'
import { invisibleAction } from '@/stores/slices/invisible.slice'
import FromCategory from './FromCategory/FromCategory'
import { categoryAction } from '@/stores/slices/category.slice'
import { api } from '@/service'
const CreateCategory: React.FC = () => {
    const invisibleStore = useSelector((state: RootState) => state.invisibler);
    const dispatch: AppDispatch = useDispatch();
    const categorieStore = useSelector((state: RootState) => state.categorier);
    const [nameCategory, setNameCategory] = useState<string>('')
    const [edit, setEdit] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    return (
        <div>
            <div className="categoryPages">
                <div className="categoryPages_btn">
                    <Button type="primary" className='categoryPages_btn-add'
                        onClick={() => {
                            dispatch(invisibleAction.formCategory(true))
                        }}
                    >
                        <PlusOutlined />
                        Thêm Mới
                    </Button>
                </div>
                <div className="categoryPages_table">
                    <table>
                        <thead>

                            <tr>
                                <th>
                                    STT
                                </th>
                                <th>
                                    Loại
                                </th>
                                <th>
                                    Trạng Thái
                                </th>
                                <th>
                                    Tác Vụ
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorieStore.data?.map((item, index) => (

                                <tr key={Math.random() * index * Date.now()}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {item.title}
                                    </td>
                                    <td>
                                        {item.status}
                                    </td>
                                    <td className='btn_action'>
                                        <button
                                            onClick={() => {
                                                dispatch(invisibleAction.formCategory(true))
                                                setNameCategory(item.title)
                                                setId(item.id)
                                                setEdit(true)
                                            }}
                                        >
                                            <EditOutlined />
                                        </button>

                                        <button
                                            onClick={() => {
                                                dispatch(categoryAction.deleteCategoy(item.id))
                                                api.categoryModule.delete(item.id);
                                            }}
                                        >
                                            <DeleteOutlined />
                                        </button>
                                    </td>
                                </tr>
                            ))

                            }


                        </tbody>
                    </table>
                </div>
                {
                    invisibleStore.data && <div className="fromInputCategory">
                        <FromCategory nameCategory={nameCategory} setNameCategory={setNameCategory} setEdit={setEdit} edit={edit} id={id} />
                    </div>
                }

            </div>

        </div>
    )
}

export default CreateCategory