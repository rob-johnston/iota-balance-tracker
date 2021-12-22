package com.iota.mobile;

import android.os.Bundle;

import androidx.activity.result.ActivityResultRegistry;
import androidx.activity.result.contract.ActivityResultContracts;

import com.getcapacitor.BridgeActivity;
import com.iotabalanceticker.savecsv.SaveCSVPlugin;

public class MainActivity extends BridgeActivity {
    private ActivityResultRegistry activityResultRegistry;
    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        registerPlugin(SaveCSVPlugin.class);

        activityResultRegistry = this.getActivityResultRegistry();
//        activityResultRegistry.register("key", ActivityResultContracts.CreateDocument()) { (uri) ->
//            System.out.println("echo");
//        }
    }


}
