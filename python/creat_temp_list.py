import pandas as pd
import json
temp_list = ['id','title','category','url','image','createdAt','updatedAt']
df = pd.read_excel('サンプルデータ.xlsx',sheet_name='temp', index_col=None)
df = df[temp_list]
## nullは""に置換
df = df.fillna("")
## json用のリストを作成2
json_list = df[temp_list].to_dict(orient='records')
## jsonファイルに書き換える
with open('../public/data/temp_list.json', 'w',encoding='utf-8') as f:
    json.dump(json_list, f,ensure_ascii=False, indent=4)