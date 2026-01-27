export default function remarkDebug() {
    return (tree, file) => {
        // 目視用：先頭だけでも十分
        console.log("\n[remark-debug]", file.path);
        console.log(JSON.stringify(tree, null, 2).slice(0, 4000));
    };
}