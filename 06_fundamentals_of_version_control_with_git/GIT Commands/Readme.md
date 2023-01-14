# GIT - Version control

## Git Commands

<table>
  <thead>
    <tr>
      <th>C. No.</th>
      <th>Sr. No.</th>
      <th>Command</th>
      <th>Argument</th>
      <th>Sub-Argument</th>
      <th>Description </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=1>1</td>
      <td rowspan=1>1</td>
      <td rowspan=1>git</td>
      <td rowspan=1>--version</td>
      <td rowspan=1></td>
      <td rowspan=1>Display git version</td>
    </tr>
    <tr>
      <td rowspan=10>2</td>
      <td rowspan=1>2</td>
      <td rowspan=10>git config</td>
      <td rowspan=1>--global </td>
      <td rowspan=1></td>
      <td rowspan=1>Use global config file</td>
    </tr>
    <tr>
      <td rowspan=1>3</td>
      <td rowspan=1></td>
      <td rowspan=1>user.name</td>
      <td rowspan=1>Display or set user name</td>
    </tr>
    <tr>
      <td rowspan=1>4</td>
      <td rowspan=1></td>
      <td rowspan=1>user.email</td>
      <td rowspan=1>Display or set user email</td>
    </tr>
    <tr>
      <td rowspan=1>5</td>
      <td rowspan=1></td>
      <td rowspan=1>color.ui auto</td>
      <td rowspan=1>Display UI color</td>
    </tr>
    <tr>
      <td rowspan=1>6</td>
      <td rowspan=1></td>
      <td rowspan=1>core.editor</td>
      <td rowspan=1>Select default editor</td>
    </tr>
    <tr>
      <td rowspan=1>7</td>
      <td rowspan=1>--system</td>
      <td rowspan=1></td>
      <td rowspan=1>Use system config file</td>
    </tr>
    <tr>
      <td rowspan=1>8</td>
      <td rowspan=1>--local</td>
      <td rowspan=1></td>
      <td rowspan=1>Use repository config file</td>
    </tr>
    <tr>
      <td rowspan=1>9</td>
      <td rowspan=1>--worktree</td>
      <td rowspan=1></td>
      <td rowspan=1>Use per-worktree config file</td>
    </tr>
    <tr>
      <td rowspan=1>10</td>
      <td rowspan=1>-f or --file</td>
      <td rowspan=1>file_name.ext</td>
      <td rowspan=1>Use given config file</td>
    </tr>
    <tr>
      <td rowspan=1>11</td>
      <td rowspan=1>--blob</td>
      <td rowspan=1>blob-id</td>
      <td rowspan=1>Read config from given blob object</td>
    </tr>
    <tr>
      <td rowspan=1>3</td>
      <td rowspan=1>12</td>
      <td rowspan=1>git init</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Create an empty Git repository or reinitialize an existing one</td>
    </tr>
    <tr>
      <td rowspan=1>4</td>
      <td rowspan=1>13</td>
      <td rowspan=1>git status</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Show the working tree status</td>
    </tr>
    <tr>
      <td rowspan=4>5</td>
      <td rowspan=1>14</td>
      <td rowspan=4>git add</td>
      <td rowspan=1>file_name.ext</td>
      <td rowspan=1></td>
      <td rowspan=1>Add perticular file to staging area</td>
    </tr>
    <tr>
      <td rowspan=1>15</td>
      <td rowspan=1>*.ext</td>
      <td rowspan=1></td>
      <td rowspan=1>Add all files with same extension to statging area</td>
    </tr>
    <tr>
      <td rowspan=1>16</td>
      <td rowspan=1>. or -A</td>
      <td rowspan=1></td>
      <td rowspan=1>Add all files to staging area</td>
    </tr>
    <tr>
      <td rowspan=1>17</td>
      <td rowspan=1>file_name.ext file_name.ext</td>
      <td rowspan=1></td>
      <td rowspan=1>Add multiple files</td>
    </tr>
    <tr>
      <td rowspan=1>6</td>
      <td rowspan=1>18</td>
      <td rowspan=1>git rm</td>
      <td rowspan=1>file_name.ext</td>
      <td rowspan=1></td>
      <td rowspan=1>Remove or delete a file from git</td>
    </tr>
    <tr>
      <td rowspan=4>7</td>
      <td rowspan=1>19</td>
      <td rowspan=4>git commit</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Open editer to add commit message and commit all files from staging area</td>
    </tr>
    <tr>
      <td rowspan=1>20</td>
      <td rowspan=1>-m</td>
      <td rowspan=1>"message"</td>
      <td rowspan=1>Commit with message in same command</td>
    </tr>
    <tr>
      <td rowspan=1>21</td>
      <td rowspan=1>-a</td>
      <td rowspan=1></td>
      <td rowspan=1>Commit skipping staging area for modified files</td>
    </tr>
    <tr>
      <td rowspan=1>22</td>
      <td rowspan=1>--ammend</td>
      <td rowspan=1>-m</td>
      <td rowspan=1>Changes very last commit</td>
    </tr>
    <tr>
      <td rowspan=5>8</td>
      <td rowspan=1>23</td>
      <td rowspan=5>git log</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Commit history</td>
    </tr>
    <tr>
      <td rowspan=1>24</td>
      <td rowspan=1>-p</td>
      <td rowspan=1></td>
      <td rowspan=1>Detailed changes</td>
    </tr>
    <tr>
      <td rowspan=1>25</td>
      <td rowspan=1>--oneline</td>
      <td rowspan=1>--decorate</td>
      <td rowspan=1>Single line decorated logs</td>
    </tr>
    <tr>
      <td rowspan=1>26</td>
      <td rowspan=1>branch1_name..branch2_name</td>
      <td rowspan=1></td>
      <td rowspan=1>Difference between both branches</td>
    </tr>
    <tr>
      <td rowspan=1>27</td>
      <td rowspan=1>repo_name/branch_name</td>
      <td rowspan=1></td>
      <td rowspan=1>Show log of remote repo</td>
    </tr>
    <tr>
      <td rowspan=2>9</td>
      <td rowspan=1>28</td>
      <td rowspan=2>git restore</td>
      <td rowspan=1>file_name.ext</td>
      <td rowspan=1></td>
      <td rowspan=1>Remove changes from the file if unstaged</td>
    </tr>
    <tr>
      <td rowspan=1>29</td>
      <td rowspan=1>--staged</td>
      <td rowspan=1>file_name.ext</td>
      <td rowspan=1>unstage perticular file</td>
    </tr>
    <tr>
      <td rowspan=5>10</td>
      <td rowspan=1>30</td>
      <td rowspan=5>git reset</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Remove files from staging area</td>
    </tr>
    <tr>
      <td rowspan=1>31</td>
      <td rowspan=3>--hard</td>
      <td rowspan=1></td>
      <td rowspan=1>Remove all changes in other word move back to last commit</td>
    </tr>
    <tr>
      <td rowspan=1>32</td>
      <td rowspan=1>Head</td>
      <td rowspan=1>Remove all changes before commit</td>
    </tr>
    <tr>
      <td rowspan=1>33</td>
      <td rowspan=2>commit_hash</td>
      <td rowspan=1>Remove commit by rolling back</td>
    </tr>
    <tr>
      <td rowspan=1>34</td>
      <td rowspan=1>--keep</td>
      <td rowspan=1>Remove commit by rolling back but keeping changes locaaly</td>
    </tr>
    <tr>
      <td rowspan=1>11</td>
      <td rowspan=1>35</td>
      <td rowspan=1>git revert</td>
      <td rowspan=1>commit_hash</td>
      <td rowspan=1></td>
      <td rowspan=1>New commit with old commit removed</td>
    </tr>
    <tr>
      <td rowspan=8>12</td>
      <td rowspan=1>36</td>
      <td rowspan=8>git branch</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>List of branches</td>
    </tr>
    <tr>
      <td rowspan=1>37</td>
      <td rowspan=1>-v</td>
      <td rowspan=1></td>
      <td rowspan=1>List of branches with detail</td>
    </tr>
    <tr>
      <td rowspan=1>38</td>
      <td rowspan=1>branch_name</td>
      <td rowspan=1></td>
      <td rowspan=1>Create new branch</td>
    </tr>
    <tr>
      <td rowspan=1>39</td>
      <td rowspan=1>-d</td>
      <td rowspan=1>branch_name</td>
      <td rowspan=1>Delete branch</td>
    </tr>
    <tr>
      <td rowspan=1>40</td>
      <td rowspan=1>-a</td>
      <td rowspan=1></td>
      <td rowspan=1>List of remote branches</td>
    </tr>
    <tr>
      <td rowspan=1>41</td>
      <td rowspan=1>-va</td>
      <td rowspan=1></td>
      <td rowspan=1>List of local and remote branches</td>
    </tr>
    <tr>
      <td rowspan=1>42</td>
      <td rowspan=1>-vva</td>
      <td rowspan=1></td>
      <td rowspan=1>List of local and remote branches with tracking linked</td>
    </tr>
    <tr>
      <td rowspan=1>43</td>
      <td rowspan=1>-dr</td>
      <td rowspan=1>repo_name/branch_name</td>
      <td rowspan=1>Delete remote branch from local</td>
    </tr>
    <tr>
      <td rowspan=5>13</td>
      <td rowspan=1>44</td>
      <td rowspan=5>git checkout</td>
      <td rowspan=1>branch_name</td>
      <td rowspan=1></td>
      <td rowspan=1>move to branch</td>
    </tr>
    <tr>
      <td rowspan=1>45</td>
      <td rowspan=1>HEAD</td>
      <td rowspan=1>file_name.ext</td>
      <td rowspan=1>Discard uncommited changes from a file</td>
    </tr>
    <tr>
      <td rowspan=1>46</td>
      <td rowspan=1>--track</td>
      <td rowspan=1>repo_name/branch_name</td>
      <td rowspan=1>Make a branch from remote branch and keep track</td>
    </tr>
    <tr>
      <td rowspan=1>47</td>
      <td rowspan=1>&lt;commit_hash&gt;</td>
      <td rowspan=1></td>
      <td rowspan=1>Move in time to said commit</td>
    </tr>
    <tr>
      <td rowspan=1>48</td>
      <td rowspan=1>-</td>
      <td rowspan=1></td>
      <td rowspan=1>Move in time to lattest commit</td>
    </tr>
    <tr>
      <td rowspan=3>14</td>
      <td rowspan=1>49</td>
      <td rowspan=3>git merge</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Merge remote changes</td>
    </tr>
    <tr>
      <td rowspan=1>50</td>
      <td rowspan=1>branch_name</td>
      <td rowspan=1></td>
      <td rowspan=1>Merges branch in the head</td>
    </tr>
    <tr>
      <td rowspan=1>51</td>
      <td rowspan=1>--abort</td>
      <td rowspan=1></td>
      <td rowspan=1>Abort merge at any stage</td>
    </tr>
    <tr>
      <td rowspan=7>15</td>
      <td rowspan=1>52</td>
      <td rowspan=7>git stash</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Stash changes</td>
    </tr>
    <tr>
      <td rowspan=1>53</td>
      <td rowspan=1>list</td>
      <td rowspan=1></td>
      <td rowspan=1>Show list of stashes</td>
    </tr>
    <tr>
      <td rowspan=1>54</td>
      <td rowspan=1>pop</td>
      <td rowspan=1></td>
      <td rowspan=1>Apply last stash and delete from list</td>
    </tr>
    <tr>
      <td rowspan=1>55</td>
      <td rowspan=1>save</td>
      <td rowspan=3>stash_name</td>
      <td rowspan=1>Save stash with a name</td>
    </tr>
    <tr>
      <td rowspan=1>56</td>
      <td rowspan=1>apply</td>
      <td rowspan=1>Apply perticular stash and keep in history</td>
    </tr>
    <tr>
      <td rowspan=1>57</td>
      <td rowspan=1>drop</td>
      <td rowspan=1>Delete stash</td>
    </tr>
    <tr>
      <td rowspan=1>58</td>
      <td rowspan=1>clear</td>
      <td rowspan=1></td>
      <td rowspan=1>Clear list</td>
    </tr>
    <tr>
      <td rowspan=2>16</td>
      <td rowspan=1>59</td>
      <td rowspan=2>git clone</td>
      <td rowspan=2>repo_URL</td>
      <td rowspan=1></td>
      <td rowspan=1>Clone Remote Repo</td>
    </tr>
    <tr>
      <td rowspan=1>60</td>
      <td rowspan=1>--recurse-submodules</td>
      <td rowspan=1>Initilize Sub modules</td>
    </tr>
    <tr>
      <td rowspan=5>17</td>
      <td rowspan=1>61</td>
      <td rowspan=5>git push</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Push changes to remote</td>
    </tr>
    <tr>
      <td rowspan=1>62</td>
      <td rowspan=1>-f</td>
      <td rowspan=1></td>
      <td rowspan=1>Force push</td>
    </tr>
    <tr>
      <td rowspan=1>63</td>
      <td rowspan=3>repo_name brach_name</td>
      <td rowspan=1></td>
      <td rowspan=1>Push changes to remote (standard practice)</td>
    </tr>
    <tr>
      <td rowspan=1>64</td>
      <td rowspan=1>-u</td>
      <td rowspan=1>Push local to remote for new link</td>
    </tr>
    <tr>
      <td rowspan=1>65</td>
      <td rowspan=1>--delete</td>
      <td rowspan=1>Delete remote branch</td>
    </tr>
    <tr>
      <td rowspan=2>18</td>
      <td rowspan=1>66</td>
      <td rowspan=2>git fetch</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Fetch changes from remote</td>
    </tr>
    <tr>
      <td rowspan=1>67</td>
      <td rowspan=1>repo_name brach_name</td>
      <td rowspan=1></td>
      <td rowspan=1>Fetch changes from remote (standard practice)</td>
    </tr>
    <tr>
      <td rowspan=1>19</td>
      <td rowspan=1>68</td>
      <td rowspan=1>git pull</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Fetch and merge remote changes</td>
    </tr>
    <tr>
      <td rowspan=4>20</td>
      <td rowspan=1>69</td>
      <td rowspan=4>git remote</td>
      <td rowspan=1>-v</td>
      <td rowspan=1></td>
      <td rowspan=1>Shows remote link</td>
    </tr>
    <tr>
      <td rowspan=1>70</td>
      <td rowspan=1>show</td>
      <td rowspan=1>repo_name</td>
      <td rowspan=1>Shows remote link with detail</td>
    </tr>
    <tr>
      <td rowspan=1>71</td>
      <td rowspan=1>add</td>
      <td rowspan=1>repo_name repo_URL</td>
      <td rowspan=1>Link local to remote</td>
    </tr>
    <tr>
      <td rowspan=1>72</td>
      <td rowspan=1>rm</td>
      <td rowspan=1>repo_name</td>
      <td rowspan=1>Remove remote repo</td>
    </tr>
    <tr>
      <td rowspan=4>21</td>
      <td rowspan=1>73</td>
      <td rowspan=4>git diff</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Shows changes in details unstaged</td>
    </tr>
    <tr>
      <td rowspan=1>74</td>
      <td rowspan=1>--staged</td>
      <td rowspan=1></td>
      <td rowspan=1>Shows changes in details staged</td>
    </tr>
    <tr>
      <td rowspan=1>75</td>
      <td rowspan=1>branch_name..branch_name</td>
      <td rowspan=1></td>
      <td rowspan=1>Show changes of two branches</td>
    </tr>
    <tr>
      <td rowspan=1>76</td>
      <td rowspan=1>commit_hash..commit_hash</td>
      <td rowspan=1></td>
      <td rowspan=1>Show changes of two commits</td>
    </tr>
    <tr>
      <td rowspan=1>22</td>
      <td rowspan=1>77</td>
      <td rowspan=1>git rebase</td>
      <td rowspan=1>branch_name</td>
      <td rowspan=1></td>
      <td rowspan=1>Rebase a branch to head</td>
    </tr>
    <tr>
      <td rowspan=5>23</td>
      <td rowspan=1>78</td>
      <td rowspan=5>git submodule</td>
      <td rowspan=1>add</td>
      <td rowspan=1></td>
      <td rowspan=1>Add a module</td>
    </tr>
    <tr>
      <td rowspan=1>79</td>
      <td rowspan=1>status</td>
      <td rowspan=1></td>
      <td rowspan=1>Detailed information</td>
    </tr>
    <tr>
      <td rowspan=1>80</td>
      <td rowspan=2>update</td>
      <td rowspan=1>--init -- recursive</td>
      <td rowspan=1>Initilize submulues</td>
    </tr>
    <tr>
      <td rowspan=1>81</td>
      <td rowspan=1>path/submodule_branch_name</td>
      <td rowspan=1>Update with latest module</td>
    </tr>
    <tr>
      <td rowspan=1>82</td>
      <td rowspan=1>deinit</td>
      <td rowspan=1></td>
      <td rowspan=1>Remove configration files</td>
    </tr>
    <tr>
      <td rowspan=7>24</td>
      <td rowspan=1>83</td>
      <td rowspan=7>git flow</td>
      <td rowspan=1>init</td>
      <td rowspan=1></td>
      <td rowspan=1>Initilize git flow</td>
    </tr>
    <tr>
      <td rowspan=1>84</td>
      <td rowspan=2>feature</td>
      <td rowspan=1>start new_feature</td>
      <td rowspan=1>Start new feature</td>
    </tr>
    <tr>
      <td rowspan=1>85</td>
      <td rowspan=1>finish new_feature</td>
      <td rowspan=1>Integrate our work to the main branch</td>
    </tr>
    <tr>
      <td rowspan=1>86</td>
      <td rowspan=2>release</td>
      <td rowspan=1>start new_version</td>
      <td rowspan=1>Start new release</td>
    </tr>
    <tr>
      <td rowspan=1>87</td>
      <td rowspan=1>finish new_version</td>
      <td rowspan=1>Finish and integarte release</td>
    </tr>
    <tr>
      <td rowspan=1>88</td>
      <td rowspan=2>hotfix</td>
      <td rowspan=1>start new_fix</td>
      <td rowspan=1>Start hotfix from production</td>
    </tr>
    <tr>
      <td rowspan=1>89</td>
      <td rowspan=1>finish new_fix</td>
      <td rowspan=1>finish hotfix</td>
    </tr>
    <tr>
      <td rowspan=7>25</td>
      <td rowspan=1>90</td>
      <td rowspan=1>choco</td>
      <td rowspan=3>install git-lfs</td>
      <td rowspan=1></td>
      <td rowspan=1>Install LFS on windows</td>
    </tr>
    <tr>
      <td rowspan=1>91</td>
      <td rowspan=1>brew</td>
      <td rowspan=1></td>
      <td rowspan=2>Install LFS Mac</td>
    </tr>
    <tr>
      <td rowspan=1>92</td>
      <td rowspan=1>port</td>
      <td rowspan=1></td>
    </tr>
    <tr>
      <td rowspan=1>93</td>
      <td rowspan=4>git lfs</td>
      <td rowspan=1>install</td>
      <td rowspan=1></td>
      <td rowspan=1>Finalize Installation</td>
    </tr>
    <tr>
      <td rowspan=1>94</td>
      <td rowspan=2>track</td>
      <td rowspan=1>file_name.ext</td>
      <td rowspan=1>Add a file to lfs</td>
    </tr>
    <tr>
      <td rowspan=1>95</td>
      <td rowspan=1>*.ext</td>
      <td rowspan=1>Add all files with extension to lfs</td>
    </tr>
    <tr>
      <td rowspan=1>96</td>
      <td rowspan=1>ls-files</td>
      <td rowspan=1></td>
      <td rowspan=1>List files LFS is tarcking</td>
    </tr>
    <tr>
      <td rowspan=3>26</td>
      <td rowspan=1>97</td>
      <td rowspan=1>ls</td>
      <td rowspan=1>~/.ssh</td>
      <td rowspan=1></td>
      <td rowspan=1>List files with public keys</td>
    </tr>
    <tr>
      <td rowspan=1>98</td>
      <td rowspan=2>ssh-keygen</td>
      <td rowspan=1>-t</td>
      <td rowspan=1>type</td>
      <td rowspan=1>public key with type</td>
    </tr>
    <tr>
      <td rowspan=1>99</td>
      <td rowspan=1>-C </td>
      <td rowspan=1>comment</td>
      <td rowspan=1>public key with some comment</td>
    </tr>
  </tbody>
</table>

---

## dot Files

<table>
  <thead>
    <tr>
      <th>F. No.</th>
      <th>Sr. No.</th>
      <th>File Name</th>
      <th>Entry</th>
      <th>Description </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=5>1</td>
      <td rowspan=1>1</td>
      <td rowspan=5>.gitignore</td>
      <td rowspan=1></td>
      <td rowspan=1>Ignore Files for git to track</td>
    </tr>
    <tr>
      <td rowspan=1>2</td>
      <td rowspan=1>path/file_name.ext</td>
      <td rowspan=1>Ignore perticular file</td>
    </tr>
    <tr>
      <td rowspan=1>3</td>
      <td rowspan=1>file_name.ext</td>
      <td rowspan=1>Ignore all files with same name and extension</td>
    </tr>
    <tr>
      <td rowspan=1>4</td>
      <td rowspan=1>path/folder</td>
      <td rowspan=1>Ignore complete folder</td>
    </tr>
    <tr>
      <td rowspan=1>5</td>
      <td rowspan=1>*.ext</td>
      <td rowspan=1>Igonre all files with same extension</td>
    </tr>
    <tr>
      <td rowspan=1>2</td>
      <td rowspan=1>6</td>
      <td rowspan=1>.gitmodules</td>
      <td rowspan=1></td>
      <td rowspan=1>Git keeps track of our Submodules and their configuration</td>
    </tr>
    <tr>
      <td rowspan=1>3</td>
      <td rowspan=1>7</td>
      <td rowspan=1>.gitattributes</td>
      <td rowspan=1></td>
      <td rowspan=1>Remember which file to track</td>
    </tr>
  </tbody>
</table>

---

## Terminal Commands

<table>
  <thead>
    <tr>
      <th>C. No.</th>
      <th>Sr. No.</th>
      <th>Command</th>
      <th>Argument</th>
      <th>Sub-Argument</th>
      <th>Description </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan=1>1</td>
      <td rowspan=1>1</td>
      <td rowspan=1>pwd</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Print working directory </td>
    </tr>
    <tr>
      <td rowspan=4>2</td>
      <td rowspan=1>2</td>
      <td rowspan=4>cd</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>Change directory</td>
    </tr>
    <tr>
      <td rowspan=1>3</td>
      <td rowspan=1>..</td>
      <td rowspan=1></td>
      <td rowspan=1>Move one directory Up</td>
    </tr>
    <tr>
      <td rowspan=1>4</td>
      <td rowspan=1>~</td>
      <td rowspan=1></td>
      <td rowspan=1>User accounts home folder</td>
    </tr>
    <tr>
      <td rowspan=1>5</td>
      <td rowspan=1>subfolder/sub-subfolder</td>
      <td rowspan=1></td>
      <td rowspan=1>Move to a Sub folder</td>
    </tr>
    <tr>
      <td rowspan=3>3</td>
      <td rowspan=1>6</td>
      <td rowspan=3>ls</td>
      <td rowspan=1></td>
      <td rowspan=1></td>
      <td rowspan=1>List file conent of a directory</td>
    </tr>
    <tr>
      <td rowspan=1>7</td>
      <td rowspan=1>-a</td>
      <td rowspan=1></td>
      <td rowspan=1>Hidden files</td>
    </tr>
    <tr>
      <td rowspan=1>8</td>
      <td rowspan=1>-l</td>
      <td rowspan=1></td>
      <td rowspan=1>More structured</td>
    </tr>
    <tr>
      <td rowspan=2>4</td>
      <td rowspan=1>9</td>
      <td rowspan=2>rm</td>
      <td rowspan=2>fileName.ext</td>
      <td rowspan=1></td>
      <td rowspan=1>Remove a file</td>
    </tr>
    <tr>
      <td rowspan=1>10</td>
      <td rowspan=1>-r</td>
      <td rowspan=1>Recursive</td>
    </tr>
    <tr>
      <td rowspan=3>5</td>
      <td rowspan=1>11</td>
      <td rowspan=2>mv</td>
      <td rowspan=1>path/fileName.ext</td>
      <td rowspan=1>differentPath/fileName.ext</td>
      <td rowspan=1>Move files</td>
    </tr>
    <tr>
      <td rowspan=1>12</td>
      <td rowspan=1>fileName.ext</td>
      <td rowspan=1>newFileName.ext</td>
      <td rowspan=1>Rename files</td>
    </tr>
    <tr>
      <td rowspan=1>13</td>
      <td rowspan=1>cp</td>
      <td rowspan=1>path/fileName.ext</td>
      <td rowspan=1>differentPath/fileName.ext</td>
      <td rowspan=1>Copy files</td>
    </tr>
    <tr>
      <td rowspan=1>6</td>
      <td rowspan=1>14</td>
      <td rowspan=1>mkdir</td>
      <td rowspan=1>folderName</td>
      <td rowspan=1></td>
      <td rowspan=1>Create new folder</td>
    </tr>
    <tr>
      <td rowspan=7>7</td>
      <td rowspan=1>15</td>
      <td rowspan=1>cat</td>
      <td rowspan=4>fileName.ext</td>
      <td rowspan=1></td>
      <td rowspan=1>OutPut file in one go</td>
    </tr>
    <tr>
      <td rowspan=1>16</td>
      <td rowspan=1>head</td>
      <td rowspan=1></td>
      <td rowspan=1>OutPut first 10 lines</td>
    </tr>
    <tr>
      <td rowspan=1>17</td>
      <td rowspan=1>tail</td>
      <td rowspan=1></td>
      <td rowspan=1>OutPut last 10 lines</td>
    </tr>   
    <tr>
      <td rowspan=4>18</td>
      <td rowspan=4>less</td>
      <td rowspan=1></td>
      <td rowspan=1>OutPut file page by page</td>
    </tr>
    <tr>
      <td rowspan=1></td>
      <td rowspan=1>space</td>
      <td rowspan=1>One page forward</td>
    </tr>
    <tr>
      <td rowspan=1></td>
      <td rowspan=1>b</td>
      <td rowspan=1>One page backward</td>
    </tr>
    <tr>
      <td rowspan=1></td>
      <td rowspan=1>q</td>
      <td rowspan=1>Quit</td>
    </tr>
  </tbody>
</table>

---

## Terminal Shortcuts

| Sr. No. | ShortCut         | Description          |
| ------- | ---------------- | -------------------- |
| 1       | TAB              | Autocomplete Words   |
| 2       | Arrow Up or Down | Show old commands    |
| 3       | Ctrl A           | Move curser to start |
| 4       | Ctrl E           | Move curser to end   |
| 5       | Ctrl C           | End command          |
