// mockjs提供mock数据接口

import Mock from 'mockjs'
import data from './data.json'

//返回文章数据
Mock.mock('/article', {code:0, data: data.article})
//返回招聘信息
Mock.mock('/recruitInfo', {code:0, data: data.recruitInfo})