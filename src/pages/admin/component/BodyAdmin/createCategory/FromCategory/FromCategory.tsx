import { CloseOutlined } from '@ant-design/icons'
import React, { ChangeEvent } from 'react'
import { AppDispatch } from '@/stores'
import { invisibleAction } from '@/stores/slices/invisible.slice'
import { useDispatch } from 'react-redux'
import { api } from '@/service'
import { categoryAction } from '@/stores/slices/category.slice'


interface Props {
  id: number,
  edit: boolean,
  setEdit: React.Dispatch<React.SetStateAction<boolean>>,
  nameCategory: string,
  setNameCategory: React.Dispatch<React.SetStateAction<string>>
}

const FromCategory: React.FC<Props> = (props) => {

  const { nameCategory, setNameCategory, edit, setEdit, id } = props;


  const dispatch: AppDispatch = useDispatch()
  console.log("name category", nameCategory);

  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNameCategory(e.target.value)

  }

  const handleCreteCategory = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Đã zô rôi  nek ");

    try {

      if (edit) {


        let item = {
          id,
          title: nameCategory,
          status: 'active'
        }
        api.categoryModule.patch(item.id, item);
        dispatch(categoryAction.updateCategory(item))
        setEdit(false);
        dispatch(invisibleAction.formCategory(false));
        setNameCategory('')
      }
      else {
        await api.categoryModule.createCategory({
          title: nameCategory,
        });
        api.categoryModule.getAll()
          .then((res) => {
            dispatch(categoryAction.setAuthen(res.data.data))
          })
        dispatch(invisibleAction.formCategory(false));
        setNameCategory('')
      }
    }
    catch (err) {

    }

  }

  return (
    <div className='fromInputCategory_from'>

      <div className="fromInputCategory_from-btnClose">
        <button
          onClick={() => {
            dispatch(invisibleAction.formCategory(false))
          }}
        >
          <CloseOutlined />
        </button>
      </div>

      <h4>
        Category
      </h4>
      <form action="" onSubmit={(e: React.FormEvent) => {
        handleCreteCategory(e);
      }}>
        <label htmlFor="">Loại:</label>

        <input type="text" name="category" value={nameCategory} placeholder='Nhập Loại Thuốc ' onChange={handleOnchange} />
        <div className="cate_btn-save">
          <button type='submit' >
            Save

          </button>

        </div>
      </form>

    </div>
  )
}

export default FromCategory