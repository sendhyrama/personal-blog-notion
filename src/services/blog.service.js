export const getBlogList = async () => {
    return await fetch(
        "https://notion-api.splitbee.io/v1/table/a16dfe1b709246f6b872d7408ad668d1",
    )
        .then((res) => res.json())
        .then((result) => result);
};

export const getBlogDetail = async (id) => {
    return await fetch(`https://notion-api.splitbee.io/v1/page/${id}`)
        .then((res) => res.json())
        .then((result) => result);
};