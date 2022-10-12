# Git 工作流

## step1. 项目初始化
> - **romote** --- mian(master) *[init]*
> - **localGit**
> - **disk**

首先，拉取项目到自己本地
```bash
git clone <url/ssh>
```

之后，切换到最新分支main/master（为方便叙述，后续段落统一使用 mian），并新建分支，切换到对应分支
```bash
git checkout main
git branch <namedev_branch>
git checkout <namedev_branch>
```
之后便可进行开发工作

## step2. 日常开发
> - **romote** --- mian(master) *[init]*
> - **localGit**
>   - mian(master) *[init]*
>   - <namedev_branch> *[init]*
> - **disk** *[init]*

如上，完成初始化后，我们的代码管理的状态，注意disk中不包含任何分支信息，它只存储当前最新代码

日常的代码处理为如下步骤
```bash
git add .
git commit -m "feat: ..."
git push -u origin <namedev_branch>
```

## step3. 检查origin状态
1. 若 origin 的 main 分支代码未发生 **更新**

在完成日常开发任务并提交远程分支后，我们会获取到如下状态
> - **romote**
>   - mian(master) *[init]*
>   - <namedev_branch> *[init]* --> *[my-commit]*
> - **localGit**
>   - mian(master) *[init]*
>   - <namedev_branch> *[init]* --> *[my-commit]*
> - **disk** *[my-commit]*

则跳转 step5 进行合并

2. 若 origin 的 main 分支代码发生 **更新**

在完成日常开发任务并提交远程分支后，我们会获取到如下状态
> - **romote**
>   - mian(master) *[init]* --> *[update]*
>   - <namedev_branch> *[init]* --> *[my-commit]*
> - **localGit**
>   - mian(master) *[init]*
>   - <namedev_branch> *[init]* --> *[my-commit]*
> - **disk** *[my-commit]*

则进行 step4 同步修改

## step4. rebase
明确一点，一切以主分支上代码为基准，主分支更新，本地的更新必须建立在主分支更新上

所以，首先在本地，切换到主分支，获取更新
```bash
git checkout mian
git pull origin main
```

此时的代码状态为
> - **romote**
>   - mian(master) *[init]* --> *[update]*
>   - <namedev_branch> *[init]* --> *[my-commit]*
> - **localGit**
>   - mian(master) *[init]* --> *[update]*
>   - <namedev_branch> *[init]* --> *[my-commit]*
> - **disk** *[init]* --> *[update]*

之后，切换到私人分支，进行 **rebase** 在本地合并代码
```bash
git checkout <namedev_branch>
git rebase main
```
> 解释一下 rebase 操作，先将个人的修改 [my-commit] 扔一边，先同步主分支的 [update] ，之后在 [update] 的基础上进行 [my-commit] 的修改  
> 自然地，这个过程可能出现 rebase conflict，即代码冲突，这时候就需要手动选择保留哪一段代码

若 rebase 操作成功，再将结果到远程个人分支
```bash
git push -f origin <namedev_branch>
```
> 由于进行了 rebase 操作，所以需要使用 -f force 提示符

之后获取到如下的代码状态
> - **romote**
>   - mian(master) *[init]* --> *[update]*
>   - <namedev_branch> *[init]* --> *[update]* --> *[my-commit]*
> - **localGit**
>   - mian(master) *[init]* --> *[update]*
>   - <namedev_branch> *[init]* --> *[update]* --> *[my-commit]*
> - **disk** *[init]* --> *[update]* --> *[my-commit]*

## step5. PR合并代码
恭喜，已经完成了所有的准备工作，现在可以提 PR 了

以 GitHub 为例，作为开发者，只需要新建 PR 请求，即点击 **[New pull request]** 按钮，请求将私人分支的代码更新合并到主分支

作为项目所有者，或管理员，会收到 PR 请求，可以选择合并或拒绝，以合并为例，点击 **[Squash and merge]** 合并代码
> Squash 就是将分支上的所有改动 commit 合并到一个 commit(这里称作**update2**) ，这是必要的，分支上可能有许多小改动，而我们希望主分支的每一次代码版本都是可用且功能完整的

一般来说，在仓库所有者合并代码后，开发者需要删除个人开发分支，远程个人分支可以在GitHub上操作，本地分支操作如下
```bash
git checkout mian
git branch -D <namedev_branch>
git pull origin  main
```

此时代码状态
> - **romote**
>   - mian(master) *[init]* --> *[update]*
--> *[update2]*
> - **localGit**
>   - mian(master) *[init]* --> *[update]*
--> *[update2]*
> - **disk** *[init]* --> *[update]* --> *[update2]*

至此，一整套代码管理工作流程完成



