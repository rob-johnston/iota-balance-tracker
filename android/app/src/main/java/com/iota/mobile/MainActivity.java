package com.iota.mobile;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;
import com.iotabalanceticker.savecsv.SaveCSVPlugin;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        registerPlugin(SaveCSVPlugin.class);
    }
}
