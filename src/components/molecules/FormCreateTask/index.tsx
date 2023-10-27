import { CreateButton, Input } from "../../atoms"

const FormCreateTask = () => {
  return (
    <div className="absolute flex items-center justify-center input-container h-[3.375rem] w-full gap-2 px-2">
      <Input placeholder='Adicione uma nova tarefa' />
      <CreateButton onClick={() => console.log('Cliquei')} />
    </div>
  )
}

export default FormCreateTask