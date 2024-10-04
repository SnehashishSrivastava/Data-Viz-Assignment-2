import pandas as pd
df=pd.read_csv("data_sample.csv")
df['ActualCost']=round(df['RawMaterial']+df['Workmanship']+df['StorageCost'],2)
df['SoldPrice']=round(df['EstimatedCost']*1.1,2)
df['MarginOfProfit']=round(df['SoldPrice']-df['ActualCost'],2)
df.to_csv("data_sample_modified.csv")