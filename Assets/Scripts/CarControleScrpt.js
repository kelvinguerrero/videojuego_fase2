#pragma strict
var WheelFL : WheelCollider;
var WheelFR : WheelCollider;
var WheelRL : WheelCollider;
var WheelRR : WheelCollider;
var WheelFLTrans: Transform;
var WheelFRTrans: Transform;
var WheelRLTrans: Transform;
var WheelRRRrans: Transform;

var maxTorque : float = 80;

function Start () {
	rigidbody.centerOfMass.y = -0.9;
}

function FixedUpdate () {
	WheelRR.motorTorque = maxTorque * Input.GetAxis("Vertical1");
	WheelRL.motorTorque = maxTorque * Input.GetAxis("Vertical1");
	WheelFL.steerAngle = 140 * Input.GetAxis("Horizontal1");
	WheelFR.steerAngle = 140 * Input.GetAxis("Horizontal1");
}

function Update()
{
	WheelFLTrans.Rotate( WheelFL.rpm/60*360*Time.deltaTime,0,0 );
	WheelFRTrans.Rotate( WheelFR.rpm/60*360*Time.deltaTime,0,0 );
	WheelRLTrans.Rotate( WheelRL.rpm/60*360*Time.deltaTime,0,0 );
	WheelRRRrans.Rotate( WheelRR.rpm/60*360*Time.deltaTime,0,0 );
	WheelFLTrans.localEulerAngles.y = WheelFL.steerAngle - WheelFLTrans.localEulerAngles.z;
	WheelFRTrans.localEulerAngles.y = WheelFR.steerAngle - WheelFRTrans.localEulerAngles.z;
	
}