# 性能优化

## 程序侧
1. drawCall
- 合并小几何体，减少drawCall调用数 `THREE.BufferGeometryUtils.mergeGeometries`
- 将多个纹理合并成一个大纹理图集，以减少纹理切换的次数，从而减少绘制调用。材质同理。

2. 资源管理
- 按需加载
- 及时释放，包括 创建的mesh、动画 等

3. 渲染优化
- requestAnimationFrame
- 动态调节渲染质量

## 模型侧
1. 几何体优化
- 优化减少多边形数目

2. 纹理优化
- KTX2压缩（对glb文件大致有5倍的压缩）