'use server'

async function addTodo(prevState: any ,formData: FormData) {
    const title = formData.get('title') as string
    if(!title){
        return {error:'タイトルを入力してください'}
    }

    return {success:true}
}