import pandas as pd
df=pd.read_csv("data_sample.csv")
df['ActualCost']=df['RawMaterial']+df['Workmanship']+df['StorageCost']
df['SoldPrice']=df['EstimatedCost']*1.1
df['MarginOfProfit']=df['SoldPrice']-df['ActualCost']
df.to_csv("data_sample_modified.csv")