#!/bin/bash

echo "执行提交";


git add .;
ls_date=`date +%Y.%m.%d`
git commit -m "提交 $ls_date $1";
git pull;
git push;

echo "提交完成";